import React, { Component } from "react";
import Experience from "./components/Experience";
import Bonus from "./components/Bonus";
import RadioComponent from "./components/RadioComponent";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Result from "./components/Result";
import CookieBanner from './components/CookieBanner'
import Header from "./components/Header";
import content from "./content";
import TagManager from 'react-gtm-module'
import { withCookies } from 'react-cookie';

const tagManagerArgs = {
  gtmId: 'GTM-5RB3TN3'
}

const proWageRatios = [
  { years: 5, ratio: 10, base: 3150 },
  { years: 10, ratio: 20 / 3, base: 3350 },
  { years: 15, ratio: 5, base: 3550 },
  { years: 20, ratio: 10 / 3, base: 3850 },
  { years: 35, ratio: 5 / 3, base: 4250 }
];

const consultantWageRatios = [
  { years: 10, ratio: 25 / 3, base: 3500 },
  { years: 15, ratio: 5, base: 3900 },
  { years: 20, ratio: 10 / 3, base: 4200 },
  { years: 35, ratio: 5 / 3, base: 4600 }
];

const batteringRamWageRatios = [
  { years: 10, ratio: 25 / 3, base: 3700 },
  { years: 15, ratio: 20 / 3, base: 3900 },
  { years: 20, ratio: 10 / 3, base: 4500 },
  { years: 35, ratio: 5 / 3, base: 4900 }
];

const findWageBasedOnExperience = (data, experience) => {
  let base = 0;
  for (const piece of data) {
    if (piece.years >= experience) {
      base = piece.base + experience * piece.ratio * 12;
      break;
    }
  }
  return base;
};

class List extends Component {
  constructor(props) {
    super(props);
    
    const { cookies } = props;
  
    this.state = {
      role: "",
      experience: 5,
      knowhow: "",
      city: "",
      location: "",
      bonus: 80,
      baseWage: "- - ",
      bonusWage: "- - ",
      cookiesAccepted: cookies.get('cookiesAccepted')
    };

    if (this.state.cookiesAccepted) {
      TagManager.initialize(tagManagerArgs)
    }
    this.calculateBaseWage = this.calculateBaseWage.bind(this);
    this.calculateBonusWage = this.calculateBonusWage.bind(this);
    this.handleChoice = this.handleChoice.bind(this);
    this.acceptCookies = this.acceptCookies.bind(this);
  }

  calculateBaseWage() {
    const { role, experience, knowhow, city, location } = this.state;

    if (role === "" || knowhow === "" || city === "" || location === "") {
      return;
    }

    let base = 0;

    // role calculation
    if (role === "future-pro") {
      base = 2600;
    } else if (role === "battering-ram") {
      base = findWageBasedOnExperience(batteringRamWageRatios, experience);
    } else if (role === "consultant") {
      base = findWageBasedOnExperience(consultantWageRatios, experience);
    } else if (role === "pro") {
      base = findWageBasedOnExperience(proWageRatios, experience);
    }

    // knowhow calculation
    if (knowhow === "behind") {
      base -= 300;
    }

    if (knowhow === "ahead") {
      base += 300;
    }

    // city bonus calculation
    if (city === "helsinki") {
      base += 300;
    }

    this.setState(
      {
        baseWage: base
      },
      () => this.calculateBonusWage()
    );
  }

  calculateBonusWage() {
    const { role, city, location, bonus } = this.state;

    let bonusPercentage = 0.3;

    if (location === "customer") {
      bonusPercentage = 0.5;
    }

    let base = (bonus - 80) * 0.05 * 31.5 * bonusPercentage;

    // role calculation
    if (city === "helsinki") {
      if (role === "future-pro") {
        base *= 70;
      } else if (role === "battering-ram") {
        base *= 95;
      } else if (role === "consultant") {
        base *= 100;
      } else if (role === "pro") {
        base *= 85;
      }
    } else {
      if (role === "future-pro") {
        base *= 50;
      } else if (role === "battering-ram") {
        base *= 80;
      } else if (role === "consultant") {
        base *= 85;
      } else if (role === "pro") {
        base *= 75;
      }
    }

    base = Math.round(base);

    this.setState({
      bonusWage: base
    });
  }

  handleChoice(title, option) {
    this.setState(
      {
        [title]: option
      },
      () => this.calculateBaseWage()
    );
  }
  
  acceptCookies() {
    TagManager.initialize(tagManagerArgs)
  
    const { cookies } = this.props;
  
    cookies.set('cookiesAccepted', true, { path: '/', maxAge: 31556952 });
  
    this.setState(
      {
        cookiesAccepted: true
      }
    )
  }

  render() {
    const [
      role,
      experienceContent,
      knowhow,
      city,
      location,
      bonusContent
    ] = content;
    const { experience, bonus, baseWage, bonusWage, cookiesAccepted } = this.state;
    
    return (
      <>
        <header>
          <Hero />
          <Header />
        </header>
        <main>
          <CookieBanner visible={!cookiesAccepted} acceptCookies={this.acceptCookies}/>
          <RadioComponent content={role} handleChoice={this.handleChoice} />
          <Experience
            content={experienceContent}
            sliderLocation={experience}
            handleChoice={this.handleChoice}
          />
          <RadioComponent content={knowhow} handleChoice={this.handleChoice} />
          <RadioComponent content={city} handleChoice={this.handleChoice} />
          <RadioComponent content={location} handleChoice={this.handleChoice} />
          <Bonus
            content={bonusContent}
            baseWage={baseWage}
            bonusWage={bonusWage}
            sliderLocation={bonus}
            handleChoice={this.handleChoice}
          />
          <Result baseWage={baseWage} bonusWage={bonusWage} />
        </main>
        <Footer />
      </>
    );
  }
}

export default withCookies(List);
