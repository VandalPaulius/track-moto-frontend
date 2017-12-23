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
    // // case constants.APPLICATION__PANEL__EDIT_TRACKER: {
    // //   const editableTrackers = state.editableTrackers ?
    // //     [...state.editableTrackers] : [];

    // //   const existingEditableTrackerIndex = editableTrackers.findIndex(tracker =>
    // //     tracker.uid === action.data.uid);

    // //   if (existingEditableTrackerIndex > -1) {
    // //     editableTrackers[existingEditableTrackerIndex] = [
    // //       ...editableTrackers[existingEditableTrackerIndex],
    // //       ...action.data
    // //     ];
    // //   } else {
    // //     // editableTrackers.push(action.data);
    // //     editableTrackers.push({ uid: action.data });
    // //   }

    // //   return {
    // //     ...state,
    // //     editableTrackers
    // //   };
    // // }
    case constants.APPLICATION__PANEL__EDIT_TRACKER: {
      console.log('APPLICATION__PANEL__EDIT_TRACKER state: ', state, ' action.data: ', action.data);
      const editableTrackers = state.editableTrackers ?
        [...state.editableTrackers] : [];

      editableTrackers.push(action.data.tracker);

      return {
        ...state,
        editableTrackers
      };
    }
    // case constants.APPLICATION__PANEL__SAVE_TRACKER: {
    //   console.log('APPLICATION__PANEL__SAVE_TRACKER action.data', action.data);

    //   const editableTrackers = state.editableTrackers.filter((tracker) => {
    //     if (tracker.uid !== action.data.uid) {
    //       return tracker;
    //     }
    //   });

    //   const trackers = state.trackers.map((tracker) => {
    //     if (tracker.uid === action.data.uid) {
    //       return {
    //         ...tracker,
    //         ...action.data
    //       };
    //     }
    //     return tracker;
    //   });

    //   return {
    //     ...state,
    //     editableTrackers,
    //     trackers
    //   };
    // }
    case constants.APPLICATION__PANEL__SAVE_TRACKER: {
      console.log('APPLICATION__PANEL__SAVE_TRACKER action.data', action.data);

      const editableTrackers = state.editableTrackers.filter((tracker) => {
        if (tracker.uid !== action.data.uid) {
          return tracker;
        }
      });

      // const trackers = state.trackers.map((tracker) => {
      //   if (tracker.uid === action.data.uid) {
      //     return {
      //       ...tracker,
      //       ...action.data
      //     };
      //   }
      //   return tracker;
      // });

      const trackers = [...state.trackers];

      // const editedTracker = trackers.find(tracker =>
      //   tracker.uid === action.data.uid);

      // console.log('editedTracker', editedTracker);

      // if (!editedTracker) {
      //   trackers.forEach((tracker) => {
      //     if (tracker.uid === action.data.uid) {
      //       tracker = action.data;
      //     }
      //   })
      // } else {
      //   trackers.push(action.data);
      // }

      const editedTrackerIndex = trackers.findIndex(tracker =>
        tracker.uid === action.data.uid);

      console.log('editedTrackerIndex', editedTrackerIndex);

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
    default: {
      return state;
    }
  }
}

export default panelReducer;
