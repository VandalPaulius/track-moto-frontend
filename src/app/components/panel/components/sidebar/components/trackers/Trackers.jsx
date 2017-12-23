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
        className="list-item hoverable"
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

    const newTrackers = [];
    this.props.editableTrackers.forEach((editableTracker) => {
      if (!this.props.trackers.find(tracker => tracker.uid === editableTracker.uid)) {
        newTrackers.push(editableTracker);
      }
    });

    const trackers = [...this.props.trackers];

    if (newTrackers.length > 0) {
      newTrackers.forEach(tracker => trackers.push(tracker));
    }

    return (
      <div>
        {trackers.map((tracker, index) => {
          const editableTrackerIndex = this.props.editableTrackers.findIndex(
            editableTracker => editableTracker.uid === tracker.uid);
          if (editableTrackerIndex > -1) {
            return (
              <div className="list-item">
                <TrackerForm
                  key={`${tracker.uid}-form`}
                  form={`form-${tracker.uid}-tracker-edit`}
                  initialValues={
                    this.props.editableTrackers[editableTrackerIndex]}
                  onSubmit={saveTrackerOnSubmit}
                  cancelEdit={this.props.handleTrackerEditCancel}
                />
              </div>
            );
          }
          return details(tracker);
        })}
        <div className="button-panel">
          <div
            className="button"
            onClick={() => this.props.handleEditTracker(null, true)}
          >
            Add tracker
          </div>
        </div>
      </div>
    );
  }

  render() {
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
  handleTrackerEditCancel: PropTypes.func.isRequired,
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
