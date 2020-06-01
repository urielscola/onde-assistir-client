import React from 'react';
import { Layout, Container, Bar, Spacing, Breadcrumb, Topic, SEO } from 'src/components';
import { useMediaQuery } from 'react-responsive';

const TermosDeUso = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return (
    <Layout>
      <SEO title="Termos de Uso - Onde Assistir Online">
        <link rel="canonical" href='/contato' />
      </SEO>
      <Bar marginBottom="0">
        <Container>
          <Spacing appearence={isMobile ? 'small' : 'medium'} />
          <Breadcrumb items={[{ label: 'Termos de Uso' }]} />
          <Spacing appearence={isMobile ? 'x-small' : 'medium'} />
          <h3>Termos de Uso</h3>
          <Spacing appearence="small" />
        </Container>
      </Bar>
      <Spacing appearence="large" />
      <Container>
        <div style={{ lineHeight: '1.5' }}>
          <Topic title="Termos de uso">
            <p>Ao acessar ao site Onde Assistir Online, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.</p>
          </Topic>
          <Spacing appearence="large" />

          <Topic title="Isenção de responsabilidade">
            <p>Os materiais no site da Onde Assistir Online são fornecidos 'como estão'. Onde Assistir Online não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
            Além disso, o Onde Assistir Online não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</p>
          </Topic>
          <Spacing appearence="large" />

          <Topic title="Limitações">
            <p>Em nenhum caso o Onde Assistir Online ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Onde Assistir Online, mesmo que Onde Assistir Online ou um representante autorizado da Onde Assistir Online tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.</p>
          </Topic>
          <Spacing appearence="large" />

          <Topic title="Precisão dos materiais">
            <p>Os materiais exibidos no site da Onde Assistir Online podem incluir erros técnicos, tipográficos ou fotográficos. Onde Assistir Online não garante que qualquer material em seu site seja preciso, completo ou atual. Onde Assistir Online pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Onde Assistir Online não se compromete a atualizar os materiais.</p>
          </Topic>
          <Spacing appearence="large" />

          <Topic title="Links">
            <p>O Onde Assistir Online não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Onde Assistir Online do site. O uso de qualquer site vinculado é por conta e risco do usuário.</p>
          </Topic>
          <Spacing appearence="large" />

          <Topic title="Modificações">
            <p> O Onde Assistir Online pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</p>
          </Topic>
          <Spacing appearence="large" />



          <p>Lei aplicável
          Estes termos e condições são regidos e interpretados de acordo com as leis do Onde Assistir Online e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.</p>
        </div>
      </Container>
    </Layout>
  )
}


export default TermosDeUso;