const app = (state = {}, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case 'FETCH_TODOS_PENDING':
      return Object.assign({}, state, {
        'isLoading': true
      });
    case 'FETCH_TODOS_FULFILLED':
    case 'FETCH_TODOS_REJECTED':
      return Object.assign({}, state, {
        'isLoading': false
      });
    default:
      return state;
  }
}

export default app;