import * as constants from './Map.constants';

const handleLoadTrackerCoordEvent = (trackerUid, userData) => {
  return (dispatch) => {
    const data = {
      trackerUid: 'trackerUid1',
      coord: [{
        timestamp: 1511977541,
        lat: 51.51032167,
        lang: -0.187084072
      }, {
        timestamp: 1511977551,
        lat: 51.51019814,
        lang: -0.187030437
      }, {
        timestamp: 1511977561,
        lat: 51.51013137,
        lang: -0.187845822
      }, {
        timestamp: 1511977571,
        lat: 51.50457546,
        lang: -0.185415744
      }, {
        timestamp: 1511977581,
        lat: 51.50476244,
        lang: -0.181875224
      }, {
        timestamp: 1511977591,
        lat: 51.50457546,
        lang: -0.179622177
      }, {
        timestamp: 1511977601,
        lat: 51.50409462,
        lang: -0.175459380
      }, {
        timestamp: 1511977611,
        lat: 51.50368057,
        lang: -0.174365042
      }, {
        timestamp: 1511977621,
        lat: 51.50299938,
        lang: -0.174729820
      }, {
        timestamp: 1511977631,
        lat: 51.50213117,
        lang: -0.174686903
      }, {
        timestamp: 1511977641,
        lat: 51.50199760,
        lang: -0.177412030
      }, {
        timestamp: 1511977651,
        lat: 51.50179725,
        lang: -0.180373197
      }, {
        timestamp: 1511977661,
        lat: 51.50143660,
        lang: -0.180351735
      }]
    };

    dispatch({
      type: constants.APPLICATION__PANEL__MAP__LOAD_MAP_DATA,
      data
    });
  };
};

export const handleLoadTrackerCoord = handleLoadTrackerCoordEvent;
