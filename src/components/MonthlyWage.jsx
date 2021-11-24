import React, { Component } from "react";
import Experience from "./Experience";
import Bonus from "./Bonus";
import RadioComponent from "./RadioComponent";
import Result from "./Result";
import content from "./../content";

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
      billingPercentage: 100,
      bonusPercentage: 5,
      baseWage: "- - ",
      bonusWage: "- - ",
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
    const { role, city, billingPercentage, bonusPercentage } = this.state;
    
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
          hourlyWage = 85
          break;
        case "consultant":
        case "battering-ram":
          hourlyWage = 95
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
          hourlyWage = 75
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
    
    bonusWage = 158 * (billingPercentage / 100) * (bonusPercentage / 100) * hourlyWage
    
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
    const { recalculate } = this.props;
    
    const [
      role,
      experienceContent,
      knowhow,
      city,
    ] = content;
    
    return (
        <>
          <RadioComponent content={role} handleChoice={this.handleChoice} selectedOption={this.state.role}/>
          <Experience
            content={experienceContent}
            sliderLocation={this.state.experience}
            handleChoice={this.handleChoice}
          />
          <RadioComponent content={knowhow} handleChoice={this.handleChoice} selectedOption={this.state.knowhow}/>
          <RadioComponent content={city} handleChoice={this.handleChoice} selectedOption={this.state.city}/>
          <Bonus
            handleChoice={this.handleChoice}
          />
          <Result
            baseWage={this.state.baseWage}
            bonusWage={this.state.bonusWage}
            recalculate={recalculate}
            buttonText={"Laske ansiosi provisiopalkalla"}
            buttonData={"commission"}
          />
        </>
    );
  }
}

export default List;
