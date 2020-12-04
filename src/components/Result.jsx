import { Container } from 'reactstrap';
import React from 'react';
import './Result.scss';

const Result = (props) => {
  const { baseWage, bonusWage } = props;
  
  let wage;
  
  if (baseWage === "- - " || bonusWage === "- - ") {
    wage = "- - "
  } else {
    wage = Math.round(baseWage + bonusWage)
  }
  
  return (
    <section>
      <Container>
        <p className="ResultTitle">Palkkasi meillä on</p>
        <p className="Result">
          { wage }
          €/kk
        </p>
        <a href="https://sysart.fi/ura-sysartilla/" className="LinkButton">Katso avoimet työpaikat</a>
      </Container>
    </section>
  );
};

export default Result;
