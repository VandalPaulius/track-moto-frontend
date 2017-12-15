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

const handleAddTrackerEvent = (userUid) => {
  return (dispatch) => {
    const data = {
      uid: 'trackerUid4',
      name: 'K1300S',
      status: 'tracking',
    };

    dispatch({
      type: constants.APPLICATION__PANEL__ADD_TRACKER,
      data
    });
  };
};

const handleRemoveTrackerEvent = (userUid, trackerUid) => {
  return (dispatch) => {
    dispatch({
      type: constants.APPLICATION__PANEL__REMOVE_TRACKER,
      trackerUid
    });
  };
};

export const handleLoadTrackers = handleLoadTrackersEvent;
export const handleSetActiveTracker = handleSetActiveTrackerEvent;
export const handleAddTracker = handleAddTrackerEvent;
export const handleRemoveTracker = handleRemoveTrackerEvent;
