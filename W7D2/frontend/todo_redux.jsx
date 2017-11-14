import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodo, receiveTodos } from './actions/todo_actions.js'

import Root from './components/root';

// const addLoggingToDispatch = (store) => {
//   const disp = store.dispatch;
//   return (action) => {
//     console.log("initial state:", store.getState());
//     console.log("initial action:", action);
//     disp(action);
//     console.log("new state:",store.getState());
//   }
// }

const addLoggingToDispatch = store => next => action => {
     console.log("initial state:", store.getState());
     console.log("initial action:", action);
     next(action);
     console.log("new state:",store.getState());
};

// Phase 2: Refactoring (without Using Redux applyMiddleware)
// const addLoggingToDispatch = store => next => action => {
//   console.log(store.getState());
//   console.log(action);
//   next(action);
//   console.log(store.getState());
// };

const applyMiddlewares = (store, ...middlewares) => {
  let dispatch = store.dispatch;
  middlewares.forEach((middleware) => {
    dispatch = middleware(store)(dispatch);
  });
  return Object.assign({}, store, { dispatch });
};




document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);
  window.store = store
  window.receiveTodo = receiveTodo
  store = applyMiddlewares(store, addLoggingToDispatch);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
