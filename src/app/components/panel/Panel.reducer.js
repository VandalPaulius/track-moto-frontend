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
    default: {
      return state;
    }
  }
}

export default panelReducer;
