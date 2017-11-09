import { Provider } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { App } from '../app';

function Root({ store }) {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

PropTypes.Root = {
  store: PropTypes.func.isRequired
};

export default Root;
