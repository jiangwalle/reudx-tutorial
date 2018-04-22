const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
      break;
    case 'TOGGLE_TODO':
      return state.map(todo => (
        todo.id === action.id ? {...todo, completed: !todo.completed} : todo
      ));
      break;
    case 'FETCH_TODOS_SUCCESS':
      return [
        ...state,
        ...payload
      ];
      break;
    default:
      return state;
  }
}

export default todos;