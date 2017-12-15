import React from 'react';
import PropTypes from 'prop-types';
import { Styles } from './assets'; // eslint-disable-line

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userMenuExpanded: false
    };

    this.actions = {
      toggleUserMenu: (isOpen) => {
        this.setState(state => ({
          ...state,
          userMenuExpanded: isOpen
        }));
      }
    };
  }

  componentWillMount() {
    this.props.handleLoadTrackers();
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
              {menuItem('trackers', () => console.log('open trackers modal'))}
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
  user: {}
};

export default Sidebar;
