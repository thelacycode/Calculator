import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/css/calculator.css';

class Calculator extends React.Component {

  constructor(props){
    super(props)
    this.digitValue = this.digitValue.bind(this);
    this.addDot = this.addDot.bind(this);
    this.clear = this.clear.bind(this);


    this.state = {
      displayValue: 0
    }
  }

  clear(){
    console.log('clear clear')
    this.setState({
      displayValue: 0
    })
  }

  digitValue(digit) {
    console.log(this.state.displayValue)
    if(this.state.displayValue === 0){
    this.setState({
      displayValue: digit
    })
  }
  else {
    this.setState({
      displayValue: this.state.displayValue + digit.toString()
    })
  }
  }

  addDot() {

    if (this.state.displayValue.indexOf('.') === -1) {
    this.setState({
      displayValue: (this.state.displayValue + '.')
    })
    }
    else{
      this.setState({
        displayValue: this.state.displayValue
      })
    }
  }


  render() {
    return(
      <div className="calculator">
        <div className="calc-display">{this.state.displayValue}</div>
          <div className="calculator-frame">
            <div className="input-keys">
              <div className="function-keys">
                <div className="calc-keys" onClick = {() =>  this.clear()}>AC</div>
                <div className="calc-keys">&plusmn;</div>
                <div className="calc-keys" >%</div>
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
                <div className="calc-keys dot-key" onClick = {() =>  this.addDot()}>.</div>
              </div>
            </div>
            <div className="operator-keys">
              <div className="calc-keys divde-key">&divide;</div>
              <div className="calc-keys times-key">&times;</div>
              <div className="calc-keys minus-key">-</div>
              <div className="calc-keys plus-key">+</div>
              <div className="calc-keys equal-key">=</div>
            </div>
          </div>
        </div>

    )
}
}

export default Calculator;
