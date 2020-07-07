import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container, FlexDiv, Spacing } from 'src/components';
import * as Styles from './styles';
import SearchBar from './SearchBar';
import Results from 'src/components/Search/Results';
import providers from 'src/assets/images/providers.png';

const AboveFold = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Styles.Container>
      <Container>
        <FlexDiv
          width="100%"
          justifyContent="space-between"
          alignItems="center"
          flexDirection={isMobile ? 'column' : 'row'}
        >
          {isMobile && <Spacing appearence="small" />}
          <div style={{ maxWidth: isMobile ? '100%' : '40%' }}>
            <Styles.Title>
              Descubra <b>onde assistir</b> o filme ou série que está procurando
            </Styles.Title>
            <SearchBar ResultComponent={Results} />
            {isMobile ? <Spacing appearence="medium" /> : <Spacing appearence="x-large" />}
            <Styles.Slogan><b>9</b> plataformas de streaming em uma só busca.</Styles.Slogan>
          </div>
          {isMobile && <Spacing appearence="small" />}
          <Styles.Providers src={providers} />
        </FlexDiv>
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