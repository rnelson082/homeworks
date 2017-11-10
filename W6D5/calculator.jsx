import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: "",
      num2: "",
      result: 0
    }

    this.setNum1 = this.setNum1.bind(this)
    this.setNum2 = this.setNum2.bind(this)
    this.add = this.add.bind(this)
    this.sub = this.sub.bind(this)
    this.mult = this.mult.bind(this)
    this.div = this.div.bind(this)
    this.clear = this.clear.bind(this)
  }

  setNum1(e){
    this.setState({
      num1: e.target.value
    });
  }

  setNum2(e){
    this.setState({
      num2: e.target.value
    });
  }

  add(){
    this.setState({ result: parseInt(this.state.num1) + parseInt(this.state.num2) })
    return this.state.result;
  }

  sub(){
    this.setState({ result: parseInt(this.state.num1) - parseInt(this.state.num2) })
    return this.state.result;
  }

  mult(){
    this.setState({ result: parseInt(this.state.num1) * parseInt(this.state.num2) })
    return this.state.result;
  }

  div(){
    this.setState({ result: parseInt(this.state.num1) / parseInt(this.state.num2) })
    return this.state.result;
  }

  clear(){
    this.setState({ result: 0, num1: "", num: ""})
    return this.state.result;
  }

  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>
        <label>Number 1</label>
        <input value={this.state.setNum1} onChange={this.setNum1}/>
        <label>Number 2</label>
        <input value={this.state.setNum2} onChange={this.setNum2}/>
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
        <button onClick={this.mult}>*</button>
        <button onClick={this.div}>/</button>
        <button onClick={this.clear}>C</button>
      </div>
    );
  }
}

export default Calculator;
