import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Map as LeafLetMap, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
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
    const position = [51.505, -0.09];
    const zoom = 13;

    return (
      <div className="map">
        <LeafLetMap center={position} zoom={zoom}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
        </LeafLetMap>
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

const mapStateToProps = (state) => {
  console.log('Map state', state);
  return ({
    mapData: state.map.mapData,
  });
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(mapActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
