import uuidv1 from 'uuid/v1';
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

const handleSaveTrackerEvent = (userUid, formData) => {
  return (dispatch) => {
    const data = formData;

    dispatch({
      type: constants.APPLICATION__PANEL__SAVE_TRACKER,
      data
    });
  };
};

const handleRemoveTrackerEvent = (userUid, trackerUid) => {
  return (dispatch) => {
    dispatch({
      type: constants.APPLICATION__PANEL__REMOVE_TRACKER,
      data: trackerUid
    });
  };
};

const handleEditTrackerEvent = (tracker, isNew) => {
  if (!tracker) {
    tracker = {}; // eslint-disable-line no-param-reassign
  }
  if (isNew) {
    tracker.uid = `temp-${uuidv1()}`; // eslint-disable-line no-param-reassign
  }
  return ({
    type: constants.APPLICATION__PANEL__EDIT_TRACKER,
    data: { tracker, isNew }
  });
};

const handleTrackerEditCancelEvent = uid => ({
  type: constants.APPLICATION__PANEL__EDIT_TRACKER_CANCEL,
  data: uid
});

export const handleLoadTrackers = handleLoadTrackersEvent;
export const handleSetActiveTracker = handleSetActiveTrackerEvent;
export const handleSaveTracker = handleSaveTrackerEvent;
export const handleRemoveTracker = handleRemoveTrackerEvent;
export const handleEditTracker = handleEditTrackerEvent;
export const handleTrackerEditCancel = handleTrackerEditCancelEvent;
