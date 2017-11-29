import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Styles } from './assets'; // eslint-disable-line
import * as mapActions from './Map.actions';

class Map extends React.Component {
  componentWillMount() {
    this.props.actions.handleLoadTrackerCoord(
      this.props.activeTracker.uid,
      this.props.user
    );
    console.log('this.props', this.props);
  }

  render() {
    return (
      <div className="map">
        Map
      </div>
    );
  }
}

Map.propTypes = {
  activeTracker: PropTypes.shape({
    uid: PropTypes.string
  }),
  actions: PropTypes.shape({
    handleLoadTrackerCoord: PropTypes.func.isRequired
  }).isRequired,
  user: PropTypes.shape({})
};

Map.defaultProps = {
  activeTracker: {},
  user: {}
};

// const mapStateToProps = state => ({
//   user: state.map,
// });
const mapStateToProps = (state) => {
  console.log('Map state', state);
  return ({
    //user: state.map,
  });
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(mapActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
