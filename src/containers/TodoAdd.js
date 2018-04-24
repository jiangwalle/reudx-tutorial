import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, fetchTodosFromServer, getPost } from '../actions';

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
          <button 
            onClick={() => this.props.dispatch(fetchTodosFromServer())}
          >
            {this.props.isLoading ? '正在加载中。。。' : '从服务器加载Todos'}
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.app.isLoading
})

export default connect(mapStateToProps)(TodoAdd);