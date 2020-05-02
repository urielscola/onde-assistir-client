import React from 'react';
import { FlexDiv, Image } from 'src/components';
import * as Styles from '../item-styles';

const ratingImages = {
  'Rotten Tomatoes': 'rotten.png',
  IMDB: 'imdb.png',
};

const Ratings = ({ ratings }) => (
  <FlexDiv alignItems="center">
    {ratings.length &&
      ratings.map(rating => {
        return (
          <Styles.Ratings key={rating.name}>
            <Image
              src={require(`../../../assets/images/${
                ratingImages[rating.name]
              }`)}
              alt={rating.name}
            />
            <p>{rating.value}</p>
          </Styles.Ratings>
        );
      })}
  </FlexDiv>
);

export default Ratings;
