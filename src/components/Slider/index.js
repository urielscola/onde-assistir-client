import React from 'react';
import styled from 'styled-components';
import Slick from 'react-slick';

const Container = styled.div`
  .slick-dots {
    bottom: -35px;
    li {
      width: 10px;
    }
  }
`;

const defaultSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  initialSlide: 0,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

const Slider = ({ children }) => {
  return (
    <Container>
      <Slick {...defaultSettings}>{children}</Slick>
    </Container>
  );
};

export default Slider;
