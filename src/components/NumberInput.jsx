import React from 'react';
import './NumberInput.scss';

const NumberInput = (props) => {
  const { description, value, unit, handleChoice, id,max, min, info, warning } = props;
  
  const setValueBoundary = (target) => {
    if (target > max) {
      return max
    }
    if (target < min) {
      return min
    }
    else {
      return target
    }
  }
  
  return (
    <div>
      <label className={"Description"}>{description}
        <input className={"NumberInput"} type="number" id="id" value={value} onInput={event => handleChoice(id, setValueBoundary(event.target.value))}/>
        <span>{unit}</span>
      </label>
      <br/>
      {
        typeof info !== 'undefined' && <p className={"NumberInputInfo"}>{info}</p>
      }
      {
        typeof warning !== 'undefined' && <p className={"NumberInputInfo Warning"}>{warning}</p>
      }
    </div>
  );
};

export default NumberInput;
