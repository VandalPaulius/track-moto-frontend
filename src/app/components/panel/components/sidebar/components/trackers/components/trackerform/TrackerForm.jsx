import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { Styles } from './assets'; // eslint-disable-line

function TrackerForm(props) {
  return (
    <div className="tracker-form">
      <div>
        <div className="item">
          <span className="label">Name</span>
          <Field
            className="value"
            name="name"
            component="input"
          />
        </div>
      </div>
      <div className="button-panel">
        <button
          className="button light"
          onClick={() => props.handleSubmit()}
        >
          Save
        </button>
      </div>
      <div className="button-panel">
        <button
          className="button light"
          onClick={() => props.cancelEdit(props.initialValues.uid)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

TrackerForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  cancelEdit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    uid: PropTypes.string
  })
};

TrackerForm.defaultProps = {
  initialValues: {}
}

export default reduxForm({
  enableReinitialize: true
})(TrackerForm);

