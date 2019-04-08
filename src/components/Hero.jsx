import React from 'react';
import { Container } from 'reactstrap';
import './Hero.scss';


const Footer = () => (
  <Container className="Hero">
    <img className="HeroImage" alt="koodarinpalkka.fi" src="../hero.svg" width="100%" />
    <p className="HeroDescription">
      Oletko ollut tilanteessa, jossa sinua on pyydetty esittämään palkkatoiveesi
      ennen kuin on edes selkeää, mitä työ oikeasti pitäisi sisällään? Me Sysartilla
      haluamme avoimesti kertoa, paljonko palkkasi olisi meillä.
    </p>
  </Container>
);

export default Footer;
