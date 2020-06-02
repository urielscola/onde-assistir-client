import React from 'react';
import { Link } from 'gatsby';
import { Layout, Container, FlexDiv, Bar, Spacing, Breadcrumb, Topic, SEO } from 'src/components';
import { useMediaQuery } from 'react-responsive';
import notfound from 'src/assets/images/404.png';

const NotFound = () => {
  const isMobile = useMediaQuery({ maxWidth: 992 })

  return (
    <Layout>
      <SEO title="404 - Onde Assistir Online">
        <link rel="canonical" href='/contato' />
      </SEO>
      <Bar marginBottom="0">
        <Container>
          <Spacing appearence={isMobile ? 'small' : 'medium'} />
          <Breadcrumb items={[{ label: 'Página não encontrada' }]} />
          <Spacing appearence={isMobile ? 'x-small' : 'medium'} />
          <h3>Página não encontrada</h3>
          <Spacing appearence="small" />
        </Container>
      </Bar>
      <Spacing appearence="large" />
      <Container>
        <FlexDiv justifyContent="space-between" flexDirection={isMobile ? 'column' : 'row'}>
          <div style={{ lineHeight: '1.5' }}>
            <Topic title="OOPS...">
              <p>
                Parece que não há nada aqui.
              </p>
            </Topic>
            <Spacing appearence="large" />
            <Topic title="ENTRE EM CONTATO">
              <p>
                Encontrou um problema? Por favor, encontre em contato conosco clicando <Link to="/contato"><b>aqui</b></Link>.
              </p>
            </Topic>
            <Spacing appearence="large" />
            <Topic title="E SIGA NAVEGANDO">
              <p>
                Pesquise títulos por categorias, streams, tags e muito mais!
              </p>
            </Topic>
            <Spacing appearence="large" />
          </div>
          <img src={notfound} />
        </FlexDiv>
      </Container>
    </Layout>
  )
}


export default NotFound;


