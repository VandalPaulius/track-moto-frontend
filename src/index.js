import * as Redux from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Root, rootReducer } from './root';

ReactDOM.render(
  <Root store={Redux.createStore(
    rootReducer,
    Redux.applyMiddleware(thunk)
  )}
  />, document.getElementById('root')
);
