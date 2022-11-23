import { createStore, applyMiddleware } from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import favorites from './reducer';

const store = createStore(
   favorites,
   applyMiddleware(thunk)
);

export default store;
