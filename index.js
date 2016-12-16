import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import App from './app.react';
import reducers from './reducer.js';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

export const store = createStoreWithMiddleware(reducers, {});
const target = document.getElementById("app")


ReactDOM.render(
  <Provider store = {store}>
    <App/>
  </Provider>, target);
