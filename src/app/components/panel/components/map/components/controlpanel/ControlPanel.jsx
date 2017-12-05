import React from 'react';
import PropTypes from 'prop-types';
import { Control } from 'leaflet';
//import { Styles } from './assets'; // eslint-disable-line
import {
  Map as LeafLetMap,
  TileLayer,
  Polyline,
  CircleMarker,
  Popup,
  Tooltip,
  Marker
} from 'react-leaflet';

class ControlPanel extends React.Component {
  zoomIn(){
    this.context.map.zoomIn()
  }
  zoomOut(){
    this.context.map.zoomOut()
  }

  render() {
    // return (
    //   // <Marker position="top-left">
    //     // <Popup>
    //     //   <button onCLick={this.zoomIn}>Zoom In</button>
    //     //   <button onCLick={this.zoomOut}>Zoom In</button>
    //     // </Popup>
    //   // </Marker>
    // )
    return (
      <Popup>
        <button onCLick={this.zoomIn}>Zoom In</button>
        <button onCLick={this.zoomOut}>Zoom In</button>
      </Popup>
    )
  }
}

ControlPanel.propTypes = {

};

ControlPanel.defaultProps = {

};

export default ControlPanel;
