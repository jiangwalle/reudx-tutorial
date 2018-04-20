import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class TodoAdd extends Component {
  constructor(props) {
    super(props);
    this.todoInput;

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    if (!this.todoInput.value.trim()) {
      return;
    }

    this.props.dispatch(addTodo(this.todoInput.value));
    this.todoInput.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input ref={todoInput => this.todoInput = todoInput} />
          <button type="submit">添加代办事项</button>
        </form>
      </div>
    )
  }
}

export default connect()(TodoAdd);