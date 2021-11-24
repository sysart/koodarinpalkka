import React, { Component } from "react";
import RadioComponent from "./components/RadioComponent";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MonthlyWage from './components/MonthlyWage'
import CommissionWage from './components/CommissionWage'
import './App.scss';

const paymentModel =
  {
    title: '',
    shortTitle: 'wageType',
    description: 'Valitse kahdesta tarjolla olevasta palkkamallista itsellesi sopiva:',
    options: [
      {
        highlightedText: 'Provisiopalkka',
        text: 'Saat 50% omasta laskutuksesta tai aina vähintään 3000€, jos projektia ei ole. Keskimäärin paremmat ansiot, mutta riski projektin löytymisestä jaetaan yrityksen kanssa.',
        id: 'commission',
      },
      {
        highlightedText: 'Kuukausipalkka',
        text: 'Saat korkean kuukausipalkan ja kohtuullisen henkilökohtaisesta laskutuksesta ja firman tuloksesta riippuvan kuukausibonuksen. Tarjoaa turvallisen ja tasaisen hyvän tulostason.',
        id: 'monthly',
      },
    ],
  }


class List extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      wageType: "",
    };
    
    this.handleChoice = this.handleChoice.bind(this);
  }

  handleChoice(title, option) {
    this.setState(
      {
        [title]: option
      },
      // () => this.calculateBaseWage()
    );
  }

  render() {
    
    const { wageType } = this.state;
    
    return (
      <>
        <header>
          <Hero />
          <Header />
        </header>
        <main>
        
        </main>
        <RadioComponent content={paymentModel} handleChoice={this.handleChoice} selectedOption={this.state.wageType}/>
        <div className={wageType === "commission" ? undefined : "Hidden"}>
          <CommissionWage recalculate={this.handleChoice}/>
        </div>
        <div className={wageType === "monthly" ? undefined : "Hidden"}>
          <MonthlyWage recalculate={this.handleChoice}/>
        </div>
        <Footer />
      </>
    );
  }
}

export default List;
