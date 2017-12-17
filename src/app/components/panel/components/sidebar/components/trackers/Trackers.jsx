import React from 'react';
import PropTypes from 'prop-types';
import { Styles } from './assets'; // eslint-disable-line

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
    return (
      <div className="trackers-list">
        {this.props.trackers.map((tracker, index) => (
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
                <div>
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
        ))}
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
  handleAddTracker: PropTypes.func.isRequired,
  handleRemoveTracker: PropTypes.func.isRequired,
  trackers: PropTypes.arrayOf(PropTypes.shape({})),
  userUid: PropTypes.string
};

Trackers.defaultProps = {
  trackers: [],
  userUid: ''
};

export default Trackers;
