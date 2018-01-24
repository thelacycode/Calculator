import React from 'react';

class Calculator extends React.Component {
  render() {
    return(
      <div className="calculator-frame">
        <div className="calculator-top">
          <div className="calculator-top-buttons">AC</div>
          <div className="calculator-top-buttons">&plusmn;</div>
          <div className="calculator-top-buttons">%</div>
        </div>
        <div className="calculator-dot">.</div>
        <div className="digit-wrapper">
          <div className="calculator-digits" onClick = {() =>  this.digitValue(9)}>9</div>
          <div className="calculator-digits" onClick = {() =>  this.digitValue(8)}>8</div>
          <div className="calculator-digits" onClick = {() =>  this.digitValue(7)}>7</div>
          <div className="calculator-digits" onClick = {() =>  this.digitValue(6)}>6</div>
          <div className="calculator-digits" onClick = {() =>  this.digitValue(5)}>5</div>
          <div className="calculator-digits" onClick = {() =>  this.digitValue(4)}>4</div>
          <div className="calculator-digits" onClick = {() =>  this.digitValue(3)}>3</div>
          <div className="calculator-digits" onClick = {() =>  this.digitValue(2)}>2</div>
          <div className="calculator-digits" onClick = {() =>  this.digitValue(1)}>1</div>
          <div className="calculator-digits" onClick = {() =>  this.digitValue(0)}>9</div>
        </div>

        <div className="calculator-expressions">&divide;</div>
        <div className="calculator-expressions">&times;</div>
        <div className="calculator-expressions">-</div>
        <div className="calculator-expressions">+</div>
        <div className="calculator-expressions">=</div>
      </div>


    )
}
}

export default Calculator;
