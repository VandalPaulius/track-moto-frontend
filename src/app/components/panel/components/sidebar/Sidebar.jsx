import React from 'react';
import PropTypes from 'prop-types';
import { Styles } from './assets'; // eslint-disable-line

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        Sidebar
        <button onClick={() => this.props.handleLogout()}>
          Log out
        </button>
      </div>
    );
  }
}

Sidebar.propTypes = {
  handleLogout: PropTypes.func.isRequired
};

Sidebar.defaultProps = {

};

export default Sidebar;
