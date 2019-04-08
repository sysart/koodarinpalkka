import { Container } from 'reactstrap';
import React from 'react';
import './Result.scss';

const Result = (props) => {
  const { baseWage, bonusWage } = props;
  return (
    <section>
      <Container>
        <p className="ResultTitle">Palkkasi meillä on</p>
        <p className="Result">
          { baseWage + bonusWage }
          €/kk
        </p>
        <a href="https://sysart.fi/ura-sysartilla/" className="LinkButton">Katso avoimet työpaikat</a>
      </Container>
    </section>
  );
};

export default Result;
