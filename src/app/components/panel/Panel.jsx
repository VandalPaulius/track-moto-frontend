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
          handleSaveTracker={this.props.actions.handleSaveTracker}
          handleRemoveTracker={this.props.actions.handleRemoveTracker}
          handleEditTracker={this.props.actions.handleEditTracker}
          handleTrackerEditCancel={this.props.actions.handleTrackerEditCancel}
          editableTrackers={this.props.editableTrackers}
        />
        <Map
          tracker={this.props.trackers.find(tracker =>
            tracker.active && tracker)}
          user={this.props.user}
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
    handleSetActiveTracker: PropTypes.func.isRequired,
    handleSaveTracker: PropTypes.func.isRequired,
    handleRemoveTracker: PropTypes.func.isRequired,
    handleEditTracker: PropTypes.func.isRequired,
    handleTrackerEditCancel: PropTypes.func.isRequired
  }).isRequired,
  trackers: PropTypes.arrayOf(PropTypes.shape()),
  editableTrackers: PropTypes.arrayOf(PropTypes.shape()),
};

Panel.defaultProps = {
  user: {},
  trackers: [],
  editableTrackers: []
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(panelActions, dispatch)
});

export default connect(null, mapDispatchToProps)(Panel);
