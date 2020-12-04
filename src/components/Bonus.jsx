import { Container } from 'reactstrap';
import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Bonus.scss';

const Range = Slider.createSliderWithTooltip(Slider.Range);

const marks = {
  50: '0%',
  80: <strong>80%</strong>,
  90: '90%',
  100: '100%',
};

const Bonus = (props) => {
  const {
    content,
    sliderLocation,
    handleChoice,
  } = props;

  return (
    <section>
      <Container>
        <h2>{content.title}</h2>
        <p className="Description">{content.description}</p>
        <div className="BonusSliderContainer">
          <Range
            count={3}
            min={50}
            max={100}
            marks={marks}
            onChange={value => (handleChoice('bonusPercentage', value[2]))}
            value={[0, 80, sliderLocation]}
            trackStyle={[{ backgroundColor: '#EA5A0A' }, { backgroundColor: '#EA5A0A' }]}
            activeDotStyle={{ borderColor: '#EA5A0A' }}
            handleStyle={[{ display: 'none' }, { display: 'none' }, { borderColor: '#EA5A0A' }]}
            step={1}
            tipFormatter={value => `${value}%`}
          />
        </div>
      </Container>
    </section>
  );
};

export default Bonus;
