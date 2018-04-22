const app = (state = {}, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case 'FETCH_TODOS_START':
      return Object.assign({}, state, {
        'isLoading': true
      });
      break;
    case 'FETCH_TODOS_SUCCESS':
    case 'FETCH_TODOS_ERROR':
      return Object.assign({}, state, {
        'isLoading': false
      });
      break;
    default:
      return state;
  }
}

export default app;