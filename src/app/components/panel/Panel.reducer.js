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
        console.log('Panel.reducer 1 editableTrackers', editableTrackers);
        console.log('Panel.reducer state', state, 'action.data', action.data);

      const existingEditableTrackerIndex = editableTrackers.findIndex(tracker =>
        tracker.uid === action.data.uid);
      // const existingTrackerIndex = state.trackers.findIndex(tracker =>
      //   tracker.uid === action.data.uid);

      console.log('Panel.reducer 2 existingEditableTrackerIndex', existingEditableTrackerIndex);

      if (existingEditableTrackerIndex > -1) {
        editableTrackers[existingEditableTrackerIndex] = [
          ...editableTrackers[existingEditableTrackerIndex],
          ...action.data
        ];
      } else {
        editableTrackers.push(action.data);
      }

      console.log('Panel.reducer 3 editableTrackers', editableTrackers);

      return {
        ...state,
        editableTrackers
      };
    }
    default: {
      return state;
    }
  }
}

export default panelReducer;
