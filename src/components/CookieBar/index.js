import React from 'react';
import { Link } from 'gatsby';
import CookieConsent from "react-cookie-consent";

const CookieBar = () => (
  <CookieConsent
    location="bottom"
    buttonText="Aceito"
    style={{ background: "#2B373B" }}
    buttonStyle={{ background: "#3A8483", color: "#fff", fontSize: "14px" }}
    expires={150}
  >
    Este site utiliza cookies para melhorar sua experiência. Se desejar, leia sobre nossa política de privacidade{' '}
    <Link
      style={{ color: '#fff', textDecoration: 'underline' }}
      to="/politica-de-privacidade">
        clicando aqui
    </Link>.
  </CookieConsent>
);

export default CookieBar;