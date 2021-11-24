import React from 'react';
import './Footer.scss';


const Footer = () => (
  <footer className="Footer">
    <a target="_blank" rel="noopener noreferrer" href="https://sysart.fi">
      <img alt="logo" src="../logo.png" />
    </a>
    <p className="Policies">
      <a target="_blank" rel="noopener noreferrer" href="https://sysart.fi/tietosuojaseloste/">Tietosuojaseloste</a>
      <a href="/evasteseloste">Evästeseloste</a><br/>
      <a target="_blank" rel="noopener noreferrer" href="https://sysart.fi/wp-content/uploads/2021/04/Rekisteriseloste-rekrytointi.pdf">Rekisteriseloste</a>
    </p>
  </footer>
);

export default Footer;
