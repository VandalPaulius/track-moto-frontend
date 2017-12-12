import * as constants from './Map.constants';

const coreMessageEmit = (type, message) => {
  if (type === 'error') {
    console.error(message);
    return;
  }
  console.log(message);
};

// const handleLoadTrackerCoordEvent = (trackerUid, userData) => {
//   return (dispatch) => {
//     const data = {
//       trackerUid: 'trackerUid1',
//       coords: [{
//         timestamp: 1511977541,
//         lat: 51.51032167,
//         long: -0.187084072
//       }, {
//         timestamp: 1511977551,
//         lat: 51.51019814,
//         long: -0.187030437
//       }, {
//         timestamp: 1511977561,
//         lat: 51.51013137,
//         long: -0.187845822
//       }, {
//         timestamp: 1511977571,
//         lat: 51.50457546,
//         long: -0.185415744
//       }, {
//         timestamp: 1511977581,
//         lat: 51.50476244,
//         long: -0.181875224
//       }, {
//         timestamp: 1511977591,
//         lat: 51.50457546,
//         long: -0.179622177
//       }, {
//         timestamp: 1511977601,
//         lat: 51.50409462,
//         long: -0.175459380
//       }, {
//         timestamp: 1511977611,
//         lat: 51.50368057,
//         long: -0.174365042
//       }, {
//         timestamp: 1511977621,
//         lat: 51.50299938,
//         long: -0.174729820
//       }, {
//         timestamp: 1511977631,
//         lat: 51.50213117,
//         long: -0.174686903
//       }, {
//         timestamp: 1511977641,
//         lat: 51.50199760,
//         long: -0.177412030
//       }, {
//         timestamp: 1511977651,
//         lat: 51.50179725,
//         long: -0.180373197
//       }, {
//         timestamp: 1511977661,
//         lat: 51.50143660,
//         long: -0.180351735
//       }]
//     };

//     dispatch({
//       type: constants.APPLICATION__PANEL__MAP__LOAD_MAP_DATA,
//       data
//     });
//   };
// };

const handleLoadTrackerCoordEvent = (trackerUid, userUid) => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_API_URL}/users/${userUid}/trackers/${trackerUid}`, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include'
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((body) => {
            dispatch({
              type: constants.APPLICATION__PANEL__MAP__LOAD_MAP_DATA,
              data: body
            });
          });
        } else {
          res.text().then(text => coreMessageEmit('error', `Error: ${text}`));
        }
      })
      .catch(err => coreMessageEmit('error', `Error: ${err}`));
  };
};

export const handleLoadTrackerCoord = handleLoadTrackerCoordEvent;
