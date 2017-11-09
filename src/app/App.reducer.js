import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import * as constants from './App.constants';

export default combineReducers({
  app: appReducer,
  form: formReducer
});

function appReducer(state = {}, action) {
  switch (action.type) {
    case constants.APPLICATION__SET__AUTHORIZED__STATUS: {
      return {
        ...state,
        authorized: action.data
      };
    }
    default: {
      return state;
    }
  }
}
