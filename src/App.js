import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Theme from './components/Theme';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'bgColor': ''
    }

    this.onColorChange = this.onColorChange.bind(this);
  }

  onColorChange(color) {
    this.setState({'bgColor': color});
  }

  render() {
    return (
      <div className="App">
        <Header bgColor={this.state.bgColor} />
        <Theme onColorChange={this.onColorChange} />
      </div>
    );
  }
}

export default App;
