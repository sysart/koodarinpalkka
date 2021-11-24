import { Container } from 'reactstrap';
import React from 'react';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Bonus.scss';

const SliderWithTooltip = createSliderWithTooltip(Slider);

const marks1 = {
  0: '0%',
  10: '10%',
  20: '20%',
  30: '30%',
  40: '40%',
  50: '50%',
  60: '60%',
  70: '70%',
  80: '80%',
  90: '90%',
  100: '100%'
};

const marks2 = {
  5: '5%',
  6: '6%',
  7: '7%',
  8: '8%',
  9: '9%',
  10: '10%',
  11: '11%',
  12: '12%'
};

const Bonus = (props) => {
  const { handleChoice } = props;

  return (
    <section>
      <Container>
        <h2>Bonus</h2>
        <p className="Description">Bonusta maksetaan kaikista laskuttamistasi tunneista 5–12 % riippuen koko firman laskutusasteesta. Bonusta kartuttaviksi tunneiksi lasketaan asiakkailta laskutettavan työn lisäksi kaikki yhteisten asioiden edistämiseksi tehty työ. Tällä hetkellä toteutunut bonusprosentti on 6–9 %.</p>
        <h3>Oma laskutusasteesi</h3>
        <div className="BonusSliderContainer">
          <SliderWithTooltip
            allowCross={true}
            min={0}
            max={100}
            marks={marks1}
            onChange={value => (handleChoice('billingPercentage', value))}
            defaultValue={100}
            trackStyle={{ backgroundColor: '#EA5A0A' }}
            activeDotStyle={{ borderColor: '#EA5A0A' }}
            handleStyle={{ borderColor: '#EA5A0A' }}
            step={1}
            tipFormatter={value => `${value}%`}
          />
        </div>
        <h3>Bonusprosentti 5-12 %</h3>
        <div className="BonusSliderContainer SpecialSlider">
          <SliderWithTooltip
            allowCross={true}
            min={5}
            max={12}
            marks={marks2}
            onChange={value => (handleChoice('bonusPercentage', value))}
            defaultValue={5}
            trackStyle={{ backgroundColor: '#EA5A0A' }}
            activeDotStyle={{ borderColor: '#EA5A0A' }}
            handleStyle={{ borderColor: '#EA5A0A' }}
            step={1}
            tipFormatter={value => `${value}%`}
          />
        </div>
      </Container>
    </section>
  );
};

export default Bonus;
