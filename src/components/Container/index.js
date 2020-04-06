import React from 'react';

const Container = ({ children }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `0 1.0875rem`,
    }}
  >
    {children}
  </div>
);

export default Container;
