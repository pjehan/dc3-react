import React, { Component } from 'react';

class Converter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.defaultValues.value,
      from: this.props.defaultValues.from,
      to: this.props.defaultValues.to,
      result: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.convert = this.convert.bind(this);
  }

  convert() {
    if (this.state.from === this.state.to) {
      this.setState({ result: this.state.value });
    } else {
      this.props.convert(this.state.value, this.state.from, this.state.to)
      .then((result) => this.setState({ result: result }))
      .catch((error) => console.log(error))
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.convert();
  }

  handleSwitch(event) {
    event.preventDefault();

    this.setState({ from: this.state.to, to: this.state.from }, () => this.convert());
  }

  render() {

    const listOptions = this.props.units.map((option) => {
      return (<option key={option} value={option}>{option}</option>);
    });

    return (
      <form onSubmit={this.handleSubmit}>
        <input name="value" value={this.state.value} onChange={this.handleChange}/>
        <select name="from" value={this.state.from} onChange={this.handleChange}>{listOptions}</select>
        <button onClick={this.handleSwitch}>Switch</button>
        <select name="to" value={this.state.to} onChange={this.handleChange}>{listOptions}</select>
        <button type="submit">Convertir</button>
        <span>{this.state.result}</span>
      </form>
    );
  }

}

export default Converter;
