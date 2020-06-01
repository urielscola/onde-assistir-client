import React from 'react';
import { Layout, Container, Bar, Spacing, Breadcrumb, Topic, SEO } from 'src/components';
import { useMediaQuery } from 'react-responsive';

const PoliticaDePrivacidade = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return (
    <Layout>
      <SEO title="Politica de Privacidade - Onde Assistir Online">
        <link rel="canonical" href='/contato' />
      </SEO>
      <Bar marginBottom="0">
        <Container>
          <Spacing appearence={isMobile ? 'small' : 'medium'} />
          <Breadcrumb items={[{ label: 'Politica de Privacidade' }]} />
          <Spacing appearence={isMobile ? 'x-small' : 'medium'} />
          <h3>Politica de Privacidade</h3>
          <Spacing appearence="small" />
        </Container>
      </Bar>
      <Spacing appearence="large" />
      <Container>
        <div style={{ lineHeight: '1.5' }}>
          <Topic title="Política Privacidade">
            <p>
              A sua privacidade é importante para nós. É política do Onde Assistir Online respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Onde Assistir Online, e outros sites que possuímos e operamos.</p><br />

            <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p><br />

            <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p><br />

            <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p><br />

            <p>O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</p><br />

            <p>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p><br />

            <p>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.</p><br />

            <p>Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.</p><br />

            <p>Esta política é efetiva a partir de Março/2020.</p>
          </Topic>
          <Spacing appearence="large" />

        </div>
      </Container>
    </Layout>
  )
}


export default PoliticaDePrivacidade;


