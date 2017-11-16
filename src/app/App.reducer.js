import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import * as constants from './App.constants';

export default combineReducers({
  app: appReducer,
  form: formReducer
});

function appReducer(state = {}, action) {
  switch (action.type) {
    case constants.APPLICATION__SET_AUTHORIZED_STATUS: {
      if (action.data) {
        return {
          ...state,
          user: {
            ...state.user,
            authorized: action.data
          }
        };
      }

      return {
        ...state,
        user: {
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
    default: {
      return state;
    }
  }
}
