import React, { Component } from 'react';

class Converter extends Component {

  constructor(props) {
    super(props);

    this.state = { value: 1, from: 'EUR', to: 'USD', result: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch('http://api.fixer.io/latest?base=' + this.state.from)
    .then((response) => response.json())
    .then((responseJson) => {
      var result = responseJson.rates[this.state.to] * this.state.value;
      this.setState({ result: result });
    })
  }

  render() {

    const listOptions = this.props.units.map((option) => {
      return (<option key={option} value={option}>{option}</option>);
    });

    return (
      <form onSubmit={this.handleSubmit}>
        <input name="value" value={this.state.value} onChange={this.handleChange}/>
        <select name="from" value={this.state.from} onChange={this.handleChange}>{listOptions}</select>
        <select name="to" value={this.state.to} onChange={this.handleChange}>{listOptions}</select>
        <button type="submit">Convertir</button>
        <span>{this.state.result}</span>
      </form>
    );
  }

}

export default Converter;
