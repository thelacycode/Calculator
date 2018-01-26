import React from 'react';
import '../styles/css/calculator.css';

class Calculator extends React.Component {
  render() {
    return(
      <div className="calculator">
        <div className="calc-display">0</div>
          <div className="calculator-frame">
            <div className="calc-left">
              <div className="calculator-top">
                <div className="calc-keys calculator-top-keys">AC</div>
                <div className="calc-keys calculator-top-keys">&plusmn;</div>
                <div className="calc-keys calculator-top-keys">%</div>
              </div>

              <div className="digit-wrapper">
                <div className="calc-keys digit-9" onClick = {() =>  this.digitValue(9)}>9</div>
                <div className="calc-keys digit-8" onClick = {() =>  this.digitValue(8)}>8</div>
                <div className="calc-keys digit-7" onClick = {() =>  this.digitValue(7)}>7</div>
                <div className="calc-keys digit-6" onClick = {() =>  this.digitValue(6)}>6</div>
                <div className="calc-keys digit-5" onClick = {() =>  this.digitValue(5)}>5</div>
                <div className="calc-keys digit-4" onClick = {() =>  this.digitValue(4)}>4</div>
                <div className="calc-keys digit-3" onClick = {() =>  this.digitValue(3)}>3</div>
                <div className="calc-keys digit-2" onClick = {() =>  this.digitValue(2)}>2</div>
                <div className="calc-keys digit-1" onClick = {() =>  this.digitValue(1)}>1</div>
                <div className="calc-keys digit-0" onClick = {() =>  this.digitValue(0)}>0</div>
                <div className="calc-keys dot-key">.</div>
              </div>
            </div>
            <div className="calculator-expressions">
              <div className="calc-keys exp-keys divde-key">&divide;</div>
              <div className="calc-keys exp-keys times-key">&times;</div>
              <div className="calc-keys exp-keys minus-key">-</div>
              <div className="calc-keys exp-keys plus-key">+</div>
              <div className="calc-keys exp-keys equal-key">=</div>
            </div>
          </div>
        </div>

    )
}
}

export default Calculator;
