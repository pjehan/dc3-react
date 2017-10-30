import React, { Component } from 'react';
import Converter from './Converter';

class DistanceConverter extends Component {

  constructor(props) {
    super(props);

    this.state = { units: ["Kilometers", "Miles"] };
  }

  convert(value, from, to) {
    return new Promise((resolve, reject) => {
      if (from === "Kilometers" && to === "Miles") {
        resolve(value * 0.62);
      } else if (from === "Miles" && to === "Kilometers") {
        resolve(value * 1.62);
      } else {
        reject("Unités incorrectes");
      }
    });
  }

  render() {
    const defaultValues = { value: 1, from: 'Kilometers', to: 'Miles' };
    return (<Converter units={this.state.units} convert={this.convert} defaultValues={defaultValues}/>);
  }

}

export default DistanceConverter;
