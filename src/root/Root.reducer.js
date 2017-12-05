import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { appReducer, panelReducer, mapReducer } from '../app';

export default combineReducers({
  app: appReducer,
  form: formReducer,
  panel: panelReducer,
  map: mapReducer
});
