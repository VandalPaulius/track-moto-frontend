import * as constants from './App.constants';

const handleSetAuthorizedStatusEvent = status => ({
  type: constants.APPLICATION__SET_AUTHORIZED_STATUS,
  data: status
});

const setUserData = data => ({
  type: constants.APPLICATION__LOGIN_USER,
  data
});

const handleRegisterEvent = (userData) => {
  return (dispatch) => {
    const data = {
      uid: 'userUid',
      name: 'User Useriano',
      token: 'temporaryUserLoginToken'
    };

    dispatch(setUserData(data));
  };
};

const handleLoginEvent = (userData) => {
  return (dispatch) => {
    const data = {
      uid: 'userUid',
      name: 'User Useriano',
      token: 'temporaryUserLoginToken'
    };

    dispatch(setUserData(data));
  };
};

export const handleSetAuthorizedStatus = handleSetAuthorizedStatusEvent;
export const handleRegister = handleRegisterEvent;
export const handleLogin = handleLoginEvent;
