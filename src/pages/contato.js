import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Layout, Container, Bar, Spacing, Breadcrumb, Topic, TextInput, TextArea, Button, SEO } from 'src/components';
import { api } from 'src/services';

const Contato = () => {
  const [success, setSuccess] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  
  const onSubmit = async (event) => {
    const target = event.target;
    event.preventDefault();

    const payload = {
      name: target.name.value,
      email: target.email.value,
      subject: target.subject.value,
      message: target.message.value,
    }

    try {
      await api.contact(payload);
      setSuccess(true);
      target.reset();
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout>
      <SEO title="Contato - Onde Assistir Online">
        <link rel="canonical" href='/contato' />
      </SEO>
      <Bar marginBottom="0">
        <Container>
          <Spacing appearence={isMobile ? 'small' : 'medium'} />
          <Breadcrumb items={[{ label: 'Contato' }]} />
          <Spacing appearence={isMobile ? 'x-small' : 'medium'} />
          <h3>Contato</h3>
          <Spacing appearence="small" />
        </Container>
      </Bar>
      <Spacing appearence="large" />
      <Container>
        <div style={{ lineHeight: '1.5' }}>
          <Topic title="Envie-nos uma mensagem">
            <p>
              Preencha o formulário abaixo para entrar em contato.</p>
          </Topic>
          <Spacing appearence="large" />
          <form onSubmit={onSubmit} style={{ maxWidth: '570px' }}>
            <TextInput label="Nome" name="name" placeholder="Informe seu nome" />
            <Spacing appearence="small" />
            <TextInput label="E-mail" name="email" placeholder="Informe seu e-mail" type="email" />
            <Spacing appearence="small" />
            <TextInput label="Assunto" name="subject" placeholder="Informe o assunto" />
            <Spacing appearence="small" />
            <TextArea label="Mensagem" name="message" placeholder="Sua mensagem" />
            <Spacing appearence="small" />
            <Button title="ENVIAR" />
            {success && (
              <>
                <Spacing appearence="small" />
                <p>Enviado com sucesso!</p>
              </>
            )}
          </form>
        </div>
      </Container>
    </Layout>
  )
}


export default Contato;


