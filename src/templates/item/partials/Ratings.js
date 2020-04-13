import React from 'react';
import { FlexDiv, Image } from 'src/components';
import * as Styles from '../item-styles';

const ratingImages = {
  'Rotten Tomatoes': 'imdb.png',
  IMDB: 'rotten.png',
};

const Ratings = ({ ratings }) => (
  <FlexDiv alignItems="center">
    {ratings.length &&
      ratings.map(rating => {
        return (
          <Styles.Ratings key={rating.name}>
            <Image src={ratingImages[rating.name]} />
            <p>{rating.value}</p>
          </Styles.Ratings>
        );
      })}
  </FlexDiv>
);

export default Ratings;
