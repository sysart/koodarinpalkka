import React from 'react';
import './CookieBanner.scss';
import { Container } from 'reactstrap';

const CookieBanner = (props) => {
  const { visible, acceptCookies } = props;
  
  if (visible ) {
    return (
      <section className={"CookieBanner"}>
        <Container>
          <h1>Käytämme evästeitä</h1>
          <p>Annan suostumukseni evästeiden käyttöön tällä verkkosivustolla. Lisätietoja tietojen käsittelystä löydät <a className="PolicyLink" href="https://sysart.fi/wp-content/uploads/2018/09/Tietosuojaseloste_Sysart.fi-1.pdf">tietosuojaselosteestamme.</a>
          </p>
          <button type="button" onClick={() => acceptCookies()}>Hyväksyn</button>
        </Container>
      </section>
    );
  }
  return null;
};

export default CookieBanner;
