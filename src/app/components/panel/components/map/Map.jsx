import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Map as LeafLetMap, TileLayer, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Styles } from './assets'; // eslint-disable-line
import * as mapActions from './Map.actions';

class Map extends React.Component {
  componentDidMount() {
    if (this.props.tracker) {
      this.props.actions.handleLoadTrackerCoord(
        this.props.tracker.uid,
        this.props.user
      );
    }
  }

  mapCoords(coords) {
    return coords.map(coord => [coord.lat, coord.long]);
  }

  trackerCoords() {
    const trackerData = this.props.mapData.find(trackerData =>
      trackerData.trackerUid === this.props.tracker.uid);

    if (trackerData) {
      return trackerData.coords;
    }
  }

  rendertrackerData() {
    return (
      <Polyline
        positions={this.mapCoords(this.trackerCoords())}
      />
    );
  }

  render() {
    const areAnyActive = () => {
      if (this.props.tracker && this.props.tracker.uid) {
        return true;
      }
    };

    const trackerHasData = () => {
      if (areAnyActive()) {
        return this.trackerCoords() && this.trackerCoords().length;
      }
    };

    const mapCenter = () => {
      if (areAnyActive()) {
        if (trackerHasData()) {
          const coords = this.mapCoords(this.trackerCoords());
          return coords[coords.length - 1];
        }
      }
      return [0, 0];
    };

    const mapZoom = (mapCenter) => mapCenter[0] === 0 && mapCenter[1] === 0 ? // eslint-disable-line
      2 : 13; // eslint-disable-line

    const noDataError = () => (
      <div className="message error">
        No tracker data available
      </div>
    );

    const noTrackerActive = () => (
      <div className="message error">
        No tracker selected
      </div>
    );

    return (
      <div className="map">
        <LeafLetMap center={mapCenter()} zoom={mapZoom(mapCenter())}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          {trackerHasData() && this.rendertrackerData()}}
        </LeafLetMap>
        <div className="message-container">
          {}
          {areAnyActive() ?
            !trackerHasData() && noDataError() :
            noTrackerActive()}
        </div>
      </div>
    );
  }
}

Map.propTypes = {
  tracker: PropTypes.shape({
    uid: PropTypes.string
  }),
  actions: PropTypes.shape({
    handleLoadTrackerCoord: PropTypes.func.isRequired
  }).isRequired,
  user: PropTypes.shape({}),
  mapData: PropTypes.arrayOf(PropTypes.shape({}))
};

Map.defaultProps = {
  tracker: {},
  user: {},
  mapData: []
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
