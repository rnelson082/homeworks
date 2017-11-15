import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';
import Root from './components/root';
import { receiveSearchGiphys, fetchSearchGiphys } from './actions/giphy_actions'



document.addEventListener("DOMContentLoaded", ()=>{
  const store = configureStore();

  window.fetchSearchGiphys = fetchSearchGiphys;
  window.store = store;
  window.receiveSearchGiphys = receiveSearchGiphys;

  const root = document.getElementById("root");
  ReactDOM.render(<div>Entry Work</div>, root)
})
