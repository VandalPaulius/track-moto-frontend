import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { Styles } from './assets'; // eslint-disable-line

function RegisterForm(props) {
  return (
    <div className="register-form">
      <div>
        <div className="item">
          <span className="label">User name</span>
          <Field
            className="value"
            name="userName"
            component="input"
          />
        </div>
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
        <div className="item">
          <span className="label">password repeat</span>
          <Field
            className="value"
            name="passwordRepeat"
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
          Register
        </button>
      </div>
    </div>
  );
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  enableReinitialize: true
})(RegisterForm);
