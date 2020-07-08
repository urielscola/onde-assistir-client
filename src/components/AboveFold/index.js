import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container, FlexDiv, Spacing, Responsive } from 'src/components';
import * as Styles from './styles';
import SearchBar from './SearchBar';
import Results from 'src/components/Search/Results';
import providers from 'src/assets/images/providers.png';

const AboveFold = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Styles.Container>
      <Container>
        <Responsive.NotDesktop>
          <FlexDiv
            width="100%"
            justifyContent="space-between"
            alignItems="center"
            flexDirection="column"
          >
            <Spacing appearence="small" />
            <div style={{ maxWidth: '100%' }}>
              <Styles.Title>
                Descubra <b>onde assistir</b> o filme ou série que está procurando
              </Styles.Title>
              <SearchBar ResultComponent={Results} />
              <Spacing appearence="medium" />
              <Styles.Slogan><b>9</b> plataformas de streaming em uma só busca.</Styles.Slogan>
            </div>
            <Spacing appearence="small" />
            <Styles.Providers src={providers} />
          </FlexDiv>
        </Responsive.NotDesktop>

        <Responsive.Desktop>
          <FlexDiv
            width="100%"
            justifyContent="space-between"
            alignItems="center"
            flexDirection="row"
          >
            <div style={{ maxWidth: '40%' }}>
              <Styles.Title>
                Descubra <b>onde assistir</b> o filme ou série que está procurando
              </Styles.Title>
              <SearchBar ResultComponent={Results} />
              <Spacing appearence="x-large" />
              <Styles.Slogan><b>9</b> plataformas de streaming em uma só busca.</Styles.Slogan>
            </div>
            <Styles.Providers src={providers} />
          </FlexDiv>
        </Responsive.Desktop>
      </Container>
    </Styles.Container>
  );
};

export default AboveFold;




{/* <Responsive.NotDesktop>
<Styles.Container>
  <Styles.Providers src={providers} />
</Styles.Container>
<Container>
  <Styles.Title>
    Descubra <b>onde assistir</b> o filme ou série que está procurando
  </Styles.Title>
  <SearchBar ResultComponent={Results} />
</Container>
</Responsive.NotDesktop>
<Responsive.Desktop>
      </Responsive.Desktop> */}