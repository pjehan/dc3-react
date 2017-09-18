import React, { Component } from 'react';

class Button extends Component {

  render() {
    var btnContent = this.props.content;
    if (typeof btnContent === "undefined") {
      btnContent = "Click";
    }

    return (<button onClick={this.props.handleClick}>{ btnContent }</button>);
  }

}

export default Button;
