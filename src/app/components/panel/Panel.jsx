import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Styles } from './assets'; // eslint-disable-line
import * as panelActions from './Panel.actions';
import { Sidebar, Map } from './components';

class Panel extends React.Component {
  render() {
    return (
      <div className="panel">
        <Sidebar
          handleLogout={this.props.handleLogout}
          user={this.props.user}
          handleLoadTrackers={this.props.actions.handleLoadTrackers}
          trackers={this.props.trackers}
          handleSetActiveTracker={this.props.actions.handleSetActiveTracker}
        />
        <Map
          tracker={this.props.trackers.find(tracker =>
            tracker.active && tracker)}
          userUid={this.props.user}
        />
      </div>
    );
  }
}

Panel.propTypes = {
  user: PropTypes.shape({}),
  handleLogout: PropTypes.func.isRequired,
  actions: PropTypes.shape({
    handleLoadTrackers: PropTypes.func.isRequired,
    handleSetActiveTracker: PropTypes.func.isRequired
  }).isRequired,
  trackers: PropTypes.arrayOf(PropTypes.shape())
};

Panel.defaultProps = {
  user: {},
  trackers: []
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(panelActions, dispatch)
});

export default connect(null, mapDispatchToProps)(Panel);
