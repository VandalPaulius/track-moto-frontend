import React from 'react';
import PropTypes from 'prop-types';
import { Styles } from './assets'; // eslint-disable-line
import { Modal } from '../modal';
import { Trackers as TrackerSettings } from './components';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userMenuExpanded: false,
      isTrackerSettingsOpen: true//false
    };

    this.actions = {
      toggleUserMenu: (isOpen) => {
        this.setState(state => ({
          ...state,
          userMenuExpanded: isOpen
        }));
      },
      toggleTrackerSettings: (isOpen) => {
        this.setState(state => ({
          ...state,
          isTrackerSettingsOpen: isOpen
        }));
      }
    };
  }

  componentWillMount() {
    this.props.handleLoadTrackers(this.props.user.uid);
  }

  userMenu() {
    const menuItem = (content, clickAction) => (
      <div
        className="item"
        onClick={clickAction}
      >
        {content}
      </div>
    );

    const userName = (onClick = () => {}) => (
      <div
        className="item user-name"
        onClick={onClick}
      >
        {this.props.user.name}
      </div>
    );

    return (
      <div className={`user-name-menu ${this.state.userMenuExpanded && 'open'}`}>
        {this.state.userMenuExpanded ?
          (
            <div onMouseLeave={() => this.actions.toggleUserMenu(false)}>
              {userName(() => this.actions.toggleUserMenu(false))}
              {menuItem('trackers', () => this.actions.toggleTrackerSettings(true))}
              {menuItem('settings', () => console.log('open settings modal'))}
              {menuItem('log out', () => this.props.handleLogout())}
            </div>
          ) :
          userName(() => this.actions.toggleUserMenu(true))
        }
      </div>
    );
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

  modalWrapper() {
    return (
      <div>
        <Modal
          isOpen={this.state.isTrackerSettingsOpen}
          onClose={() => this.actions.toggleTrackerSettings(false)}
        >
          <TrackerSettings
            handleSaveTracker={this.props.handleSaveTracker}
            handleRemoveTracker={this.props.handleRemoveTracker}
            handleEditTracker={this.props.handleEditTracker}
            trackers={this.props.trackers}
            userUid={this.props.user.uid}
            editableTrackers={this.props.editableTrackers}
            handleTrackerEditCancel={this.props.handleTrackerEditCancel}
          />
        </Modal>
      </div>
    );
  }

  render() {
    return (
      <div className="sidebar">
        {this.userMenu()}
        {this.trackers()}
        <div className="bottom-panel">
          <a
            className="website-name"
            href="http://track-moto.com"
          >
            track-moto.com
          </a>
        </div>
        {this.modalWrapper()}
      </div>
    );
  }
}

Sidebar.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  handleLoadTrackers: PropTypes.func.isRequired,
  handleSaveTracker: PropTypes.func.isRequired,
  handleRemoveTracker: PropTypes.func.isRequired,
  handleEditTracker: PropTypes.func.isRequired,
  handleTrackerEditCancel: PropTypes.func.isRequired,
  trackers: PropTypes.arrayOf(PropTypes.shape({})),
  user: PropTypes.shape({
    name: PropTypes.string,
    uid: PropTypes.string
  }),
  editableTrackers: PropTypes.arrayOf(PropTypes.shape({}))
};

Sidebar.defaultProps = {
  trackers: [],
  user: {},
  editableTrackers: []
};

export default Sidebar;
