let nextTodoId = 0;

const Todo_API = "http://www.mocky.io/v2/5adc14f63100005e00233c04?mocky-delay=3000ms";

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const VisibilityFilter = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const fetchTodosFromServer = () => ({
  type: 'FETCH_TODOS',
  payload: ''
})