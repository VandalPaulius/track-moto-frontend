import { combineReducers } from 'redux';
import * as constants from './App.constants';

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

export default appReducer;
