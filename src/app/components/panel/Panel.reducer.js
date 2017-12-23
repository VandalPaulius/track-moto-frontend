import * as constants from './Panel.constants';

function panelReducer(state = {}, action) {
  switch (action.type) {
    case constants.APPLICATION__PANEL__LOAD_TRACKERS: {
      return {
        ...state,
        trackers: action.data
      };
    }
    case constants.APPLICATION__PANEL__SET_ACTIVE_TRACKER: {
      return {
        ...state,
        trackers: state.trackers.map(tracker => ({
          ...tracker,
          active: tracker.uid === action.data && true
        }))
      };
    }
    case constants.APPLICATION__PANEL__REMOVE_TRACKER: {
      return {
        ...state,
        trackers: state.trackers.filter(tracker => tracker.uid !== action.data)
      };
    }
    case constants.APPLICATION__PANEL__EDIT_TRACKER: {
      const editableTrackers = state.editableTrackers ?
        [...state.editableTrackers] : [];

      editableTrackers.push(action.data.tracker);

      return {
        ...state,
        editableTrackers
      };
    }
    case constants.APPLICATION__PANEL__SAVE_TRACKER: {
      const editableTrackers = state.editableTrackers.filter((tracker) => {
        if (tracker.uid !== action.data.uid) {
          return tracker;
        }
      });
      const trackers = [...state.trackers];
      const editedTrackerIndex = trackers.findIndex(tracker =>
        tracker.uid === action.data.uid);

      if (editedTrackerIndex > -1) {
        trackers[editedTrackerIndex] = action.data;
      } else {
        trackers.push(action.data);
      }

      return {
        ...state,
        editableTrackers,
        trackers
      };
    }
    case constants.APPLICATION__PANEL__EDIT_TRACKER_CANCEL: {
      return {
        ...state,
        editableTrackers: state.editableTrackers.filter((tracker) => {
          if (tracker.uid !== action.data) {
            return tracker;
          }
        })
      };
    }
    default: {
      return state;
    }
  }
}

export default panelReducer;
