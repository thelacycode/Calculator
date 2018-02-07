import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/css/calculator.css';
import { Textfit } from 'react-textfit';
import NumberFormat from 'react-number-format';

class Calculator extends React.Component {

  constructor(props){
    super(props)
    this.digitValue = this.digitValue.bind(this);
    this.addDot = this.addDot.bind(this);
    this.clearKey = this.clearKey.bind(this);
    this.plusMinus = this.plusMinus.bind(this);
    this.calculatePercent = this.calculatePercent.bind(this);
    this.performOperation = this.performOperation.bind(this);
    this.performCalculation = this.performCalculation.bind(this);


    this.state = {
      displayValue: '0',
      savedValue: '0',
      waitingOnOperand: false,
      operator: null
    }
}

  clearKey(){
      this.setState({
      displayValue: '0',
      waitingOnOperand: false
    })
  }

  plusMinus(){
      this.setState({
        displayValue: String(parseFloat(this.state.displayValue) * -1)
      })
    }

    calculatePercent(){
      this.setState({
        displayValue: String(parseFloat(this.state.displayValue) / 100)
      })
    }


  digitValue(digit) {
    const displayValue = this.state.displayValue

    if(this.state.waitingOnOperand){
      this.setState({
        displayValue: String(digit)

      })
  }else{
    this.setState({
      displayValue: displayValue === '0' ? String(digit) : displayValue + String(digit)
    })
}

this.setState({
  waitingOnOperand: false
})
}
  addDot() {
    const displayValue = this.state.displayValue

    this.setState({
      displayValue: displayValue.indexOf('.') === -1 ? displayValue + '.' : displayValue,
      waitingOnOperand: false
    })
    }

  performOperation(operator){
      const displayValue = this.state.displayValue
      const savedValue = this.state.savedValue

    this.setState({
        savedValue: this.state.displayValue,
        waitingOnOperand: true,
        operator: operator
      })
    }

performCalculation() {
  const displayValue = parseFloat(this.state.displayValue)
  const savedValue = parseFloat(this.state.savedValue)
  const operator = this.state.operator

          if(operator ==='divide'){
            this.setState({
              displayValue: String(savedValue / displayValue)
            })
          }
          if(operator ==='multiply'){
            this.setState({
              displayValue: String(savedValue * displayValue)
            })
          }
          if(operator ==='add'){
            this.setState({
              displayValue: String(savedValue + displayValue)
            })
          }
          if(operator ==='subract'){
            this.setState({
              displayValue: String(savedValue - displayValue)
              })
          }
      }

  render() {
    return(

      <div className="calculator">
        <Textfit className="calc-display" mode="single"
        forceSingleModeWidth={false}><NumberFormat value={this.state.displayValue} displayType={'text'} thousandSeparator={true}/></Textfit>
          <div className="calculator-frame">
            <div className="input-keys">
              <div className="function-keys">
                <div className="calc-keys" onClick = {() =>  this.clearKey()}>AC</div>
                <div className="calc-keys" onClick = {() => this.plusMinus()}>&plusmn;</div>
                <div className="calc-keys" onClick = {() => this.calculatePercent()}>%</div>
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
              <div className="calc-keys divde-key" onClick = {() =>  this.performOperation('divide')}>&divide; </div>
              <div className="calc-keys multiply-key" onClick = {() =>  this.performOperation('multiply')}>x</div>
              <div className="calc-keys subract-key" onClick = {() =>  this.performOperation('subract')}>-</div>
              <div className="calc-keys add-key" onClick = {() =>  this.performOperation('add')}>+</div>
              <div className="calc-keys equal-key" onClick = {() =>  this.performCalculation()}>=</div>
            </div>
          </div>
        </div>

    )
}
}

export default Calculator;
