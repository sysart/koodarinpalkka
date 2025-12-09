import { Container } from 'reactstrap';
import React from 'react';
import './Result.scss';

const Result = (props) => {
  const { baseWage, bonusWage, recalculate, disclaimer, buttonData, buttonText } = props;
  
  let wage;
  let bonus;
  let yearlyWage;
  
  if (baseWage === "- - " || bonusWage === "- - ") {
    wage = "- - "
    bonus = "- - "
    yearlyWage = "- - "
  } else {
    wage = Math.round(baseWage)
    bonus = Math.round(bonusWage)
    yearlyWage = Math.round((wage + bonus) * 12.5)
  }
  
  return (
    <section>
      <Container>
        <div className={"ResultContainer"}>
          <p className="ResultTitle">Bruttopalkkasi meillä on</p>
          { buttonData === "monthly" &&
            <p className="Result">
              { wage.toLocaleString("fi-FI") }
              €/kk
              <br/>
              { yearlyWage.toLocaleString("fi-FI") }
              €/v
            </p>
          }
          { buttonData === "commission" &&
          
          <p className="ResultSmall">
            Peruspalkka { wage.toLocaleString("fi-FI") }€/kk
            <br/>
            Bonus { bonus.toLocaleString("fi-FI") }
            €/kk
            <br/>
            <br/>
            Yhteensä { (wage + bonus).toLocaleString("fi-FI") } €/kk
            <br/>
            <br/>
            { yearlyWage.toLocaleString("fi-FI") }
            €/v
          </p>
          }
          {
            typeof disclaimer !== 'undefined' && <p className="Disclaimer">{disclaimer}</p>
          }
        </div>
      </Container>
      <Container>
        <div className={"CTA-Container"}>
          <button onClick={() => {recalculate("wageType", buttonData); window.scroll(0, 460)}} className="LinkButton ActionButton">{buttonText}</button>
          <div>
            <a href="https://sysart.fi/blog/2022/03/29/qa-sysartin-palkkamalli/" className="LinkButton">Palkkamallin Q&A</a>
          </div>
          <div>
            <a href="https://sysart.fi/ura-sysartilla/" className="LinkButton">Katso avoimet työpaikat</a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Result;
