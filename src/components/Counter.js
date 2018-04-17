import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: ''
    }
    this.store = props.store;
    this.getCountFromStore = this.getCountFromStore.bind(this);
    this.render = this.render.bind(this);
  }

  componentDidMount() {
    this.store.subscribe(this.getCountFromStore);
  }

  getCountFromStore() {
    this.setState({'count': this.store.getState()});
  }

  render() {
    const value = this.store.getState();
    return(
      <p>
          Clicked: {value} times
          <button onClick={() => this.store.dispatch({type: 'INCREMENT'})}>+</button>
          <button onClick={() => this.store.dispatch({type: 'DECREMENT'})}>-</button>
      </p>
    )
  } 
}