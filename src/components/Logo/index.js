import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
// import Image from '../Image';
import * as Styles from './styles';

const Logo = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     logo: file(relativePath: { eq: "logo.png" }) {
  //       childImageSharp {
  //         fixed(width: 80) {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <Styles.Container>
      <h1>
        {/* <Image src={data.logo.childImageSharp} /> */}
        <Styles.Text>
          <p>-- onde --</p>
          <p>-- assistir</p>
          <p>online --</p>
        </Styles.Text>
      </h1>
    </Styles.Container>
  );
};

export default Logo;
