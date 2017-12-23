import uuidv1 from 'uuid/v1';
import * as constants from './Panel.constants';

const handleLoadTrackersEvent = (userData) => {
  return (dispatch) => {
    const data = [{
      uid: 'trackerUid1',
      name: 'S1000RR',
      status: 'tracking',
    }, {
      uid: 'trackerUid2',
      name: 'Ducati 999',
      status: 'idle',
    }, {
      uid: 'trackerUid3',
      name: 'Hayabusa',
      status: 'idle',
    }];

    dispatch({
      type: constants.APPLICATION__PANEL__LOAD_TRACKERS,
      data
    });
  };
};

const handleSetActiveTrackerEvent = uid => ({
  type: constants.APPLICATION__PANEL__SET_ACTIVE_TRACKER,
  data: uid
});

const handleSaveTrackerEvent = (userUid, formData) => {
  return (dispatch) => {
    // dev start
    const data = formData;
    // if ()

    // const data = {
    //   ...formData,
    //   uid: formData.uid + formData.uid
    // }

    // dev end

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

// const handleEditTrackerEvent = (tracker, isNew) => ({
//   type: constants.APPLICATION__PANEL__EDIT_TRACKER,
//   data: { tracker, isNew }
// });

const handleEditTrackerEvent = (tracker, isNew) => {
  if (!tracker) {
    tracker = {} // eslint-disable-line no-param-reassign
  }
  if (isNew) {
    tracker.uid = `temp-${uuidv1()}`; // eslint-disable-line no-param-reassign
  }
  return ({
    type: constants.APPLICATION__PANEL__EDIT_TRACKER,
    data: { tracker, isNew }
  });
};

export const handleLoadTrackers = handleLoadTrackersEvent;
export const handleSetActiveTracker = handleSetActiveTrackerEvent;
export const handleSaveTracker = handleSaveTrackerEvent;
export const handleRemoveTracker = handleRemoveTrackerEvent;
export const handleEditTracker = handleEditTrackerEvent;
