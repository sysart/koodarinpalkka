import { Container } from 'reactstrap';
import React from 'react';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Experience.scss';

const SliderWithTooltip = createSliderWithTooltip(Slider);

const marks = {
  0: 0,
  5: '5',
  10: '10',
  15: '15',
  20: '20',
  25: '25',
  30: '30',
  35: '35+',
};

const Role = (props) => {
  const { content, sliderLocation, handleChoice } = props;

  return (
    <section>
      <Container>
        <h2>{content.title}</h2>
        <p className="Description">{content.description}</p>
        <div className="SliderContainer">
          <SliderWithTooltip
            min={0}
            max={35}
            marks={marks}
            defaultValue={5}
            onChange={value => handleChoice('experience', value)}
            trackStyle={{ backgroundColor: '#EA5A0A' }}
            activeDotStyle={{ borderColor: '#EA5A0A' }}
            handleStyle={{ borderColor: '#EA5A0A' }}
            tipFormatter={value => `${value} vuotta`}
          />
        </div>
        <p className="ExperienceLabel">
          { sliderLocation }
          &nbsp;vuotta
        </p>
      </Container>
    </section>
  );
};

export default Role;
