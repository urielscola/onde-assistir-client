import moment from 'moment';
import { PRICING } from 'src/utils';

export const makeJSONLD = (payload, sources) => {
  const LD = {
    context: 'http://schema.org',
    '@type': payload.type === 'movie' ? 'Movie' : 'TVSeries',
    dateCreated: payload.year,
    description: payload.description,
    image: payload.cover,
    name: payload.title,
    duration: payload.runtime ? payload.runtime : null,
    genre: payload.tags ? payload.tags.map(c => c) : [],
    duration: payload.runtime ? moment.duration(payload.runtime, 'minutes') : null,
    actor: payload.cast
      ? payload.cast.map(c => ({ '@type': 'Person', name: c }))
      : [],
  };

  if (
    payload.ratings &&
    payload.ratings.length > 0 &&
    payload.ratings.find(r => r.name.toLowerCase() === 'imdb')
  ) {
    const imdbRating = payload.ratings.find(r => r.name.toLowerCase() === 'imdb');
    const review = {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: imdbRating.value
      }  
    };

    if (imdbRating.count) {
      review.aggregateRating = {
        '@type': 'AggregateRating',
        ratingValue: imdbRating.value,
        reviewCount: imdbRating.count
      }
    }

    LD.review = review;
  };

  if (sources && sources.length > 0) {
    const offers = {
      '@type': 'AggregateOffer',
      highPrice: PRICING[sources[sources.length - 1].name],
      lowPrice: PRICING[sources[0].name],
      priceCurrency: ['BRL'],
      offerCount: sources.length,
      offers: sources.map(source => ({
        '@type': 'Offer',
        name: `${payload.title} flatrate`,
        priceCurrency: 'BRL',
        price: PRICING[source.name],
        url: source.url
      }))
    }

    LD.offers = offers;
  }

  return JSON.stringify(LD);
};
