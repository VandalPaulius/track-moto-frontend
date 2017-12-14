import * as constants from './Panel.constants';

const coreMessageEmit = (type, message) => {
  if (type === 'error') {
    console.error(message);
    return;
  }
  console.log(message);
};

// const handleLoadTrackersEvent = (userData) => {
//   return (dispatch) => {
//     const data = [{
//       uid: 'trackerUid1',
//       name: 'S1000RR',
//       status: 'tracking',
//     }, {
//       uid: 'trackerUid2',
//       name: 'Ducati 999',
//       status: 'idle',
//     }, {
//       uid: 'trackerUid3',
//       name: 'Hayabusa',
//       status: 'idle',
//     }];

//     dispatch({
//       type: constants.APPLICATION__PANEL__LOAD_TRACKERS,
//       data
//     });
//   };
// };

const handleLoadTrackersEvent = (userUid) => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_API_URL}/users/${userUid}/trackers`, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include'
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((body) => {
            dispatch({
              type: constants.APPLICATION__PANEL__LOAD_TRACKERS,
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

const handleSetActiveTrackerEvent = uid => ({
  type: constants.APPLICATION__PANEL__SET_ACTIVE_TRACKER,
  data: uid
});

export const handleLoadTrackers = handleLoadTrackersEvent;
export const handleSetActiveTracker = handleSetActiveTrackerEvent;
