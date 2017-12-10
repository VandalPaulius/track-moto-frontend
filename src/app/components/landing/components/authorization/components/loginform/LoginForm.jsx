import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { Styles } from './assets'; // eslint-disable-line

function LoginForm(props) {
  return (
    <div className="login-form">
      <div>
        <div className="item">
          <span className="label">email</span>
          <Field
            className="value"
            name="email"
            component="input"
          />
        </div>
        <div className="item">
          <span className="label">password</span>
          <Field
            className="value"
            name="password"
            component="input"
            type="password"
          />
        </div>
      </div>
      <div className="button-panel">
        <button
          className="button light"
          onClick={() => props.handleSubmit()}
        >
          Log in
        </button>
      </div>
    </div>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  enableReinitialize: true
})(LoginForm);
