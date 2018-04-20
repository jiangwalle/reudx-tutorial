import React, { Component } from 'react';
import './App.css';
import TodoAdd from './containers/TodoAdd';
import VisibleTodoList from './containers/VisibleTodoList';
import TodoFilter from './components/TodoFilter';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TodoAdd />
        <VisibleTodoList />
        <TodoFilter />
      </div>
    );
  }
}

export default App;
