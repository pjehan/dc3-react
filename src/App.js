import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import CurrencyConverter from './components/CurrencyConverter';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = { time: new Date(), value: 0 };

    this.refreshTime = this.refreshTime.bind(this);
    this.increment = this.increment.bind(this);
    setInterval(this.refreshTime, 1000);
  }

  refreshTime() {
    this.setState({ time: new Date() });
  }

  increment() {
    var val = this.state.value;
    this.setState({ value: val + 1 });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>{ this.state.time.toLocaleTimeString() }</div>
        <Button content="Increment" handleClick={this.increment} />
        <Button />
        <Button />
        <div>{ this.state.value }</div>
        <CurrencyConverter/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
