export const makeJSONLD = payload => {
  const LD = {
    context: 'http://schema.org',
    '@type': payload.type === 'movie' ? 'Movie' : 'TVSeries',
    actor: payload.cast
      ? payload.cast.map(c => ({ '@type': 'Person', name: c }))
      : [],
    dateCreated: payload.year,
    description: payload.description,
    image: payload.cover,
    name: payload.title,
    duration: payload.runtime ? payload.runtime : null,
    genre: payload.tags ? payload.tags.map(c => c) : [],
  };

  return JSON.stringify(LD);
};
