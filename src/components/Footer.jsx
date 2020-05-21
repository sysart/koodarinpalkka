import React from 'react';
import './Footer.scss';


const Footer = () => (
  <footer className="Footer">
    <img alt="logo" src="../logo.png" />
    <p className="Policies">
      <a href="https://sysart.fi/wp-content/uploads/2018/09/Tietosuojaseloste_Sysart.fi-1.pdf">Tietosuojaseloste</a>
      <a href="https://sysart.fi/wp-content/uploads/2020/05/Rekisteriseloste-rekrytointi.pdf">Rekisteriseloste</a>
    </p>
  </footer>
);

export default Footer;
