
import rootReducer from '../reducers/root_reducer';
import { createStore, applyMiddleware } from 'redux';

 import thunk from 'redux-thunk';
 import logger from 'redux-logger';

//
// const configureStore = (preloadedState = {}) => {
//   const store = createStore(rootReducer, preloadedState);
//   store.subscribe(() => {
//     localStorage.state = JSON.stringify(store.getState());
//   });
//   return store;
// }

let configureStore = (preloadedState = {}) => (
 createStore(
   rootReducer,
   preloadedState,
   applyMiddleware(thunk, logger)
 )
);

 // export default configureStore;
export default configureStore;
