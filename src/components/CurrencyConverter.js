import React, { Component } from 'react';
import Converter from './Converter'

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

  render() {
    return (<Converter units={this.state.units}/>);
  }

}

export default CurrencyConverter;
