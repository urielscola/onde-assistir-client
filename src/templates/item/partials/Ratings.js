import React from 'react';
import { FlexDiv, Image } from 'src/components';
import * as Styles from '../item-styles';

const Ratings = ({ ratings, ratingImages }) => (
  <FlexDiv alignItems="center">
    {ratings.length &&
      ratings.map(rating => {
        return (
          <Styles.Ratings key={rating.name}>
            <Image src={ratingImages[rating.name].childImageSharp} />
            <p>{rating.value}</p>
          </Styles.Ratings>
        );
      })}
  </FlexDiv>
);

export default Ratings;
