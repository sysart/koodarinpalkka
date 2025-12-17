import React, { Component } from "react";
import Result from "./Result";
import {Container} from 'reactstrap'
import NumberInput from './NumberInput'

class List extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      hourlyBilling: 95,
      billableHoursPerMonth: 158,
      baseWage: 7743,
    };
    
    this.calculateBaseWage = this.calculateBaseWage.bind(this);
    this.handleChoice = this.handleChoice.bind(this);
  }
  
  calculateBaseWage() {
    const hourlyBilling = parseInt(this.state.hourlyBilling, 10);
    const billableHoursPerMonth = parseInt(this.state.billableHoursPerMonth, 10);
    
    let base = 0;
    
    if (billableHoursPerMonth <= 158) {
      base = (hourlyBilling / 2) * (billableHoursPerMonth + 5) * billableHoursPerMonth / 158;
    } else {
      base = (hourlyBilling / 2) * (billableHoursPerMonth + 5);
    }

    console.log(base)

    this.setState(
      {
        baseWage: base < 3000 ? 3000 : base
      }
    );
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
    const { hourlyBilling, billableHoursPerMonth, baseWage } = this.state;
    
    return (
      <>
        <section>
          <Container className={"NumberInputContainer"}>
            <h2>Paljonko ansaitset provisiopalkalla</h2>
            <NumberInput
              description={"Projektin tuntihinta?"}
              value={hourlyBilling}
              unit={"€/h"}
              id={"hourlyBilling"}
              min={0}
              max={150}
              handleChoice={this.handleChoice}
            />
            <NumberInput
              description={"Laskutettavat tunnit kuukaudessa?"}
              value={billableHoursPerMonth}
              unit={"h/kk"}
              id={"billableHoursPerMonth"}
              min={0}
              max={250}
              handleChoice={this.handleChoice}
              info={"Kuukaudessa on keskimäärin 158 työtuntia."}
              warning={billableHoursPerMonth > 158 && "Huomioithan palkka-arviossasi työaikalainsäädännön. Viikoittainen säännöllinen työaika saa neljän kuukauden seurantajakson aikana ylittää työsopimuksessa määritellyn työajan enintään 60 tunnilla."}
            />
          </Container>
        </section>
        <Result
          baseWage={baseWage}
          bonusWage={0}
          baseYearlyWage={baseWage * 12 + 25 * 7.5 * hourlyBilling / 2}
          recalculate={recalculate}
          disclaimer={"Kokonaisansiossa huomioitu arkipyhien vaikutus, joka on keskimäärin 5 tuntia kuukaudessa. Maksamme arkipyhistä keskipalkan mukaan. Arkipyhien lisäksi myös vuosilomilta, muilta palkallisilta vapaapäiviltä sekä palkallisilta sairaslomapäiviltä maksetaan viimeksi päättyneen lomakauden keskiansion mukaan."}
          buttonText={"Laske ansiosi kuukausipalkalla"}
          buttonData={"monthly"}
        />
      </>
    );
  }
}

export default List;
