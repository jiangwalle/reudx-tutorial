import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="App-header" style={{backgroundColor: this.props.bgColor}} />
      </div>
    )
  }
}