import React from 'react';
import { Container, Responsive, FlexDiv } from 'src/components';
import * as Styles from './styles';
import SearchBar from './SearchBar';
import Results from 'src/components/Search/Results';
import phone from 'src/assets/images/phone.png';
import triangle from 'src/assets/images/triangle.svg';

const AboveFold = () => {
  return (
    <div>
      <Responsive.NotDesktop>
        <Styles.Container>
          <Styles.Phone src={phone} />
          <Styles.Triangle src={triangle} />
        </Styles.Container>
        <Container>
          <Styles.Title>
            9 serviços de stream, <br />
            uma única pesquisa.
          </Styles.Title>
          <SearchBar ResultComponent={Results} />
        </Container>
      </Responsive.NotDesktop>
      <Responsive.Desktop>
        <Styles.Container>
          <Container>
            <FlexDiv
              width="100%"
              justifyContent="space-between"
              alignItems="center"
            >
              <div style={{ position: 'relative', bottom: '70px' }}>
                <Styles.Title>
                  9 serviços de stream, <br />
                  uma única pesquisa.
                </Styles.Title>
                <SearchBar ResultComponent={Results} />
              </div>
              <Styles.Phone src={phone} />
            </FlexDiv>
          </Container>
          <Styles.Triangle src={triangle} />
        </Styles.Container>
      </Responsive.Desktop>
    </div>
  );
};

export default AboveFold;
