import React, { Component } from "react";
import Experience from "./components/Experience";
import Bonus from "./components/Bonus";
import RadioComponent from "./components/RadioComponent";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Result from "./components/Result";
import Header from "./components/Header";
import Profit from './components/Profit';
import content from "./content";

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
    
    this.state = {
      role: "",
      experience: 5,
      knowhow: "",
      city: "",
      bonusPercentage: 80,
      baseWage: "- - ",
      bonusWage: "- - ",
      profit: 10,
    };
    
    this.calculateBaseWage = this.calculateBaseWage.bind(this);
    this.calculateBonusWage = this.calculateBonusWage.bind(this);
    this.handleChoice = this.handleChoice.bind(this);
  }

  calculateBaseWage() {
    const { role, experience, knowhow, city } = this.state;

    if (role === "" || knowhow === "" || city === "" ) {
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
    const { role, city, bonusPercentage, profit } = this.state;
  
    let hourlyWage;
    let bonusWage;
    
    // Role calculation
    if (city === "helsinki") {
      // Helsinki
      switch (role) {
        case "future-pro":
          hourlyWage = 65
          break;
        case "pro":
          hourlyWage = 87.5
          break;
        case "consultant":
        case "battering-ram":
          hourlyWage = 97.5
          break;
        default:
          hourlyWage = 0
      }
    } else {
      // Oulu
      switch (role) {
        case "future-pro":
          hourlyWage = 50
          break;
        case "pro":
          hourlyWage = 72.5
          break;
        case "consultant":
        case "battering-ram":
          hourlyWage = 85
          break;
        default:
          hourlyWage = 0
      }
    }
    
    // Calculate bonus wage
    if (profit <= 4) {
      bonusWage = (bonusPercentage - 80) / 20 * 0.3 * 31.6 * hourlyWage
    } else if (profit <= 10) {
      bonusWage = (bonusPercentage - 80) / 20 * (0.4 + 2 * (profit - 5) / 100) * 31.6 * hourlyWage
    } else if (profit <= 14) {
      bonusWage = (bonusPercentage - 80) / 20 * 0.5 * 31.6 * hourlyWage
    } else if (profit <= 19) {
      bonusWage = (bonusPercentage - 80) / 20 * 0.5 * 39.5 * hourlyWage
    } else if (profit <= 24) {
      bonusWage = (bonusPercentage - 80) / 20 * 0.5 * 47.5 * hourlyWage
    } else if (profit <= 25) {
      bonusWage = (bonusPercentage - 80) / 20 * 0.5 * 55.3 * hourlyWage
    }

    this.setState({
      bonusWage: bonusWage
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

  render() {
    const [
      role,
      experienceContent,
      knowhow,
      city,
      bonusContent,
      profitContent
    ] = content;
    
    const { experience, bonusPercentage, baseWage, bonusWage, profit } = this.state;
    
    return (
      <>
        <header>
          <Hero />
          <Header />
        </header>
        <main>
          <RadioComponent content={role} handleChoice={this.handleChoice} />
          <Experience
            content={experienceContent}
            sliderLocation={experience}
            handleChoice={this.handleChoice}
          />
          <RadioComponent content={knowhow} handleChoice={this.handleChoice} />
          <RadioComponent content={city} handleChoice={this.handleChoice} />
          <Bonus
            content={bonusContent}
            sliderLocation={bonusPercentage}
            handleChoice={this.handleChoice}
          />
          <Profit
            content={profitContent}
            baseWage={baseWage}
            bonusWage={bonusWage}
            sliderLocation={profit}
            handleChoice={this.handleChoice}
          />
          <Result baseWage={baseWage} bonusWage={bonusWage} />
        </main>
        <Footer />
      </>
    );
  }
}

export default List;
