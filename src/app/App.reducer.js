import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  app: appReducer,
  form: formReducer
});

function appReducer(state = {}, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
