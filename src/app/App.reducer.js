import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import * as constants from './App.constants';
import { panelReducer } from './components';

export default combineReducers({
  app: appReducer,
  form: formReducer,
  panel: panelReducer
});

function appReducer(state = {}, action) {
  switch (action.type) {
    case constants.APPLICATION__SET_AUTHORIZED_STATUS: {
      return {
        ...state,
        user: {
          ...state.user,
          authorized: action.data
        }
      };
    }
    case constants.APPLICATION__LOGIN_USER: {
      return {
        ...state,
        user: {
          ...state.user,
          uid: action.data.uid,
          name: action.data.name,
          token: action.data.token
        }
      };
    }
    case constants.APPLICATION__LOGOUT_USER: {
      return {
        ...state,
        user: {}
      };
    }
    default: {
      return state;
    }
  }
}
