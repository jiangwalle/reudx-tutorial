import React, { Component } from 'react';

export default class Theme extends Component {
  constructor(props) {
    super(props);
  }

  changeColor = (color) => {
    this.props.onColorChange(color);  
  }

  render() {
    return (
      <div style={{margin: '20px'}}>
        <button onClick={this.changeColor.bind(this, 'blue')}>blue</button>
        <button onClick={this.changeColor.bind(this, 'pink')}>pink</button>
        <button onClick={this.changeColor.bind(this, 'red')}>red</button>
        <button onClick={this.changeColor.bind(this, 'black')}>black</button>
      </div>
    )
  }
}