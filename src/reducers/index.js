import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import app from './app';

export default combineReducers({
  todos,
  visibilityFilter,
  app
})