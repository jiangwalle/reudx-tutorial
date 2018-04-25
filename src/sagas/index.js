import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

const Todo_API = "http://www.mocky.io/v2/5adc14f63100005e00233c04?mocky-delay=3000ms";

function* fetchTodos(action) {
  try {
    yield put({type: 'FETCH_TODOS_PENDING'});
    const response = yield call(fetch, Todo_API);
    const todos = yield response.json();
    yield put({type: 'FETCH_TODOS_SUCCESS', payload: todos});
  } catch (e) {
    yield put({type: 'FETCH_TODOS_ERROR', payload: e});
  }
}

function* todoSaga() {
  yield* takeEvery("FETCH_TODOS", fetchTodos);
}

export default todoSaga;