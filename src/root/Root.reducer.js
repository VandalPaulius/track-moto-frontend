import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { appReducer, panelReducer, mapReducer } from '../app';
import * as constants from './Root.constants';

// export default combineReducers({
//   app: appReducer,
//   form: formReducer,
//   panel: panelReducer,
//   map: mapReducer
// });


const rootReducer = (state, action) => {
  if (action.type === 'RESET_STATE') {
    return undefined; // state = undefined;
  }

  return combineReducers({
    app: appReducer,
    form: formReducer,
    panel: panelReducer,
    map: mapReducer
  });
};

export default rootReducer;
