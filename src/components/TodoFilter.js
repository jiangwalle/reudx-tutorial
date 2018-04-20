import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilter } from '../actions';

const TodoFilter = () => (
  <div>
    <span>显示: </span>
    <FilterLink filter={VisibilityFilter.SHOW_ALL}>全部</FilterLink>
    <FilterLink filter={VisibilityFilter.SHOW_ACTIVE}>待办</FilterLink>
    <FilterLink filter={VisibilityFilter.SHOW_COMPLETED}>已完成</FilterLink>
  </div>
);

export default TodoFilter;