import React from 'react';
import PropTypes from 'prop-types';
//import { Styles } from './assets'; // eslint-disable-line

class Panel extends React.Component {
  render() {
    return (
      <div className="panels">
        {/* Map
        <button onClick={() => this.props.actions.handleLogout()}>
          Log out
        </button> */}

      </div>
    );
  }
}

Panel.propTypes = {
  user: PropTypes.shape({}),
  handleLogout: PropTypes.func.isRequired,
};

Panel.defaultProps = {
  user: {}
};

export default Panel;
