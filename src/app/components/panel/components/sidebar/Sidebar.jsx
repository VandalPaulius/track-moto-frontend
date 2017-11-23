import React from 'react';
import PropTypes from 'prop-types';
import { Styles } from './assets'; // eslint-disable-line

class Sidebar extends React.Component {
  componentWillMount() {
    this.props.handleLoadTrackers();
  }

  trackers() {
    return (
      <div className="trackers-container">
        {this.props.trackers.map((tracker, index) => (
          <div
            key={tracker.uid}
            onClick={() => this.props.handleSetActiveTracker(tracker.uid)}
            className={`tracker ${tracker.active && 'active'}`}
          >
            <div className="name">
              {tracker.name}
            </div>
            <div className="status">
              {tracker.status}
            </div>
          </div>
        ))}
      </div>
    );
  }

  render() {
    console.log('Sidebar this.props', this.props);
    return (
      <div className="sidebar">
        {this.props.user.name}
        {this.trackers()}
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
  handleLoadTrackers: PropTypes.func.isRequired,
  trackers: PropTypes.arrayOf(PropTypes.shape({})),
  user: PropTypes.shape({
    name: PropTypes.string
  })
};

Sidebar.defaultProps = {
  trackers: [],
  users: {}
};

export default Sidebar;
