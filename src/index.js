import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import todoSaga from './sagas';

// 创建saga中间件
const sagaMiddleware = createSagaMiddleware();

// 添加saga中间件
const store = createStore(
  rootReducer, 
  applyMiddleware(sagaMiddleware)
);

ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>, 
  document.getElementById('root'));

// 立即运行saga，让监控器开始监控
sagaMiddleware.run(todoSaga);
  
registerServiceWorker();
