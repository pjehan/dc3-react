import React, { Component } from 'react';
import Converter from './Converter';

class CurrencyConverter extends Component {

  constructor(props) {
    super(props);

    this.state = { units: [] };
  }

  componentDidMount() {
    fetch('http://api.fixer.io/latest')
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      var values = Object.keys(responseJson.rates);
      values.push(responseJson.base);
      this.setState({ units: values.sort() });
    })
  }

  convert(value, from, to) {
    return new Promise((resolve, reject) => {
      fetch('http://api.fixer.io/latest?base=' + from)
      .then((response) => response.json())
      .then((responseJson) => {
        var result = responseJson.rates[to] * value;
        resolve(result);
      })
      .catch((error) => reject(error))
    });
  }

  render() {
    const defaultValues = { value: 1, from: 'EUR', to: 'USD' };
    return (<Converter units={this.state.units} convert={this.convert} defaultValues={defaultValues}/>);
  }

}

export default CurrencyConverter;
