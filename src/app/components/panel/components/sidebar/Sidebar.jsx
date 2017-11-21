import React from 'react';
import PropTypes from 'prop-types';
import { Styles } from './assets'; // eslint-disable-line

class Sidebar extends React.Component {
  componentWillMount() {
    this.props.handleLoadTrackers();
  }

  render() {
    return (
      <div className="sidebar">
        Sidebar
        <div className="bottom-panel">
          <button
            className="button light"
            onClick={() => this.props.handleLogout()}
          >
            Log out
          </button>
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  handleLoadTrackers: PropTypes.func.isRequired
};

Sidebar.defaultProps = {

};

export default Sidebar;
