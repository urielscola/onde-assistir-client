import React from 'react';
// import { Link } from 'gatsby';
import { Image } from '../index';

const Thumb = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Image src={data.node.cover} />
      oi <p>é</p>
    </div>
  );
};

export default Thumb;
