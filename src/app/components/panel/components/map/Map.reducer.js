import * as constants from './Map.constants';

function mapReducer(state = {}, action) {
  switch (action.type) {
    case constants.APPLICATION__PANEL__MAP__LOAD_MAP_DATA: {
      // // const mapData = [...state.mapData];

      // // const existingDataIndex = mapData.find((data, index) => {
      // //   if (data.uid === action.data.trackerUid) {
      // //     return index;
      // //   }
      // // });

      // // if (existingDataIndex || existingDataIndex === 0) {
      // //   mapData[existingDataIndex] = action.data;
      // // } else {
      // //   mapData.push(action.data);
      // // }

      return {
        ...state,
        //mapData
      };
    }
    default: {
      return state;
    }
  }
}

export default mapReducer;
