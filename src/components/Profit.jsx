import { Container, Row, Col } from 'reactstrap';
import React from 'react';
import Slider, { createSliderWithTooltip } from 'rc-slider'
import 'rc-slider/assets/index.css';
import './Profit.scss';

const SliderWithTooltip = createSliderWithTooltip(Slider);

const marks = {
  0: '0%',
  5: '5%',
  10: '10%',
  15: '15%',
  20: '20%',
  25: '25%',
};

const Bonus = (props) => {
  const {
    content,
    baseWage,
    bonusWage,
    handleChoice,
  } = props;
  
  return (
    <section>
      <Container>
        <h2>{content.title}</h2>
        <p className="Description">{content.description}</p>
        <div className="BonusSliderContainer">
          <SliderWithTooltip
            min={0}
            max={25}
            marks={marks}
            defaultValue={10}
            onChange={value => (handleChoice('profit', value))}
            trackStyle={{ backgroundColor: '#EA5A0A' }}
            activeDotStyle={{ borderColor: '#EA5A0A' }}
            handleStyle={{ borderColor: '#EA5A0A' }}
            tipFormatter={value => `${value} %`}
          />
        </div>
        <Row>
          <Col md={6}>
            <h3 className="BonusSubtitle">Peruspalkka</h3>
            <p className="BonusWage">
              {baseWage}
              €/kk
            </p>
          </Col>
          <Col md={6}>
            <h3 className="BonusSubtitle">Bonus</h3>
            <p className="BonusWage">
              {bonusWage !== "- - " ? Math.round(bonusWage) : "- - "}
              €/kk
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Bonus;
