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

export const handleLoadTrackers = handleLoadTrackersEvent;
