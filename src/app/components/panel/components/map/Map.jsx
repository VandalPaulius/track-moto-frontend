import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Styles } from './assets'; // eslint-disable-line
import * as mapActions from './Map.actions';

class Map extends React.Component {
  render() {
    return (
      <div className="map">
        Map
      </div>
    );
  }
}

Map.propTypes = {
  trackers: PropTypes.arrayOf(PropTypes.shape({}))
};

Map.defaultProps = {
  trackers: {}
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(mapActions, dispatch)
});

export default connect(null, mapDispatchToProps)(Map);
