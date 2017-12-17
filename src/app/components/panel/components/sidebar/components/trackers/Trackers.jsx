import React from 'react';
import PropTypes from 'prop-types';
import { Styles } from './assets'; // eslint-disable-line
import { TrackerForm } from './components';

class Trackers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.actions = {
      toggleTrackerMenu: (trackerUid) => {
        this.setState(state => ({
          ...state,
          showTrackerMenu: trackerUid
        }));
      }
    };
  }

  trackers() {
    const details = tracker => (
      <div
        key={tracker.uid}
        className="item"
        onMouseEnter={() => this.actions.toggleTrackerMenu(tracker.uid)}
        onMouseLeave={() => this.actions.toggleTrackerMenu()}
      >
        <div className="name">
          {tracker.name}
        </div>
        <div className="status">
          {tracker.status}
        </div>
        {tracker.uid === this.state.showTrackerMenu && (
          <div className="button-panel">
            <div
              className="button"
              onClick={() => this.props.handleEditTracker(tracker)}
            >
              Edit
            </div>
            <div
              className="button"
              onClick={() =>
                this.props.handleRemoveTracker(this.props.userUid, tracker.uid)}
            >
              Remove
            </div>
          </div>
        )}
      </div>
    );

    const saveTrackerOnSubmit = formData =>
      this.props.handleSaveTracker(this.props.userUid, formData);

    return (
      <div className="trackers-list">
        {this.props.trackers.map((tracker) => {
          const editableTrackerIndex = this.props.editableTrackers.findIndex(uid =>
            uid === tracker.uid);
          if (editableTrackerIndex > -1) {
            return (
              <TrackerForm
                form={`form-${tracker.uid}-tracker-edit`}
                initialValues={this.props.editableTrackers[editableTrackerIndex]}
                onSubmit={saveTrackerOnSubmit}
              />
            );
          }
          return details(tracker);
        })}
        <div className="item">
          <div className="button-panel">
            <div>
              Add tracker
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    console.log('Trackers this.props', this.props);
    return (
      <div className="trackers">
        {this.trackers()}
      </div>
    );
  }
}

Trackers.propTypes = {
  handleSaveTracker: PropTypes.func.isRequired,
  handleRemoveTracker: PropTypes.func.isRequired,
  handleEditTracker: PropTypes.func.isRequired,
  trackers: PropTypes.arrayOf(PropTypes.shape({})),
  userUid: PropTypes.string,
  editableTrackers: PropTypes.arrayOf(PropTypes.shape({}))
};

Trackers.defaultProps = {
  trackers: [],
  userUid: '',
  editableTrackers: []
};

export default Trackers;
