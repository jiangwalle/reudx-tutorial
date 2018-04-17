import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import counter from './reducers/counter';
import Counter from './components/Counter';

const store = createStore(counter);

ReactDOM.render(<Counter store={store} />, document.getElementById('root'));