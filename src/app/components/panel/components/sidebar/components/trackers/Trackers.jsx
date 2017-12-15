import React from 'react';
import PropTypes from 'prop-types';
import { Styles } from './assets'; // eslint-disable-line

class Trackers extends React.Component {
  render() {
    console.log('Trackers this.props', this.props);
    return (
      <div className="trackers">
        trackers
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
