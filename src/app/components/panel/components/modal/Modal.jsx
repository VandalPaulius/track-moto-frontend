import React from 'react';
import PropTypes from 'prop-types';
import { Styles } from './assets'; // eslint-disable-line

class Modal extends React.Component {
  render() {
    if (this.props.isOpen) {
      return (
        <div
          className="modal"
          onClick={event => this.props.onClose()}
        >
          <div
            className="content"
            onClick={event => event.stopPropagation()}
          >
            <div className="interaction-panel">
              <div
                className="button"
                onClick={this.props.onClose}
              >
                close
              </div>
            </div>
            {this.props.children}
          </div>
        </div>
      );
    }
    return null;
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};

Modal.defaultProps = {
  isOpen: false
};

export default Modal;
