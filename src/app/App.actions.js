import * as constants from './App.constants';

const setAuthorizedStatus = status => ({
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
    dispatch(setAuthorizedStatus(true));
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
    dispatch(setAuthorizedStatus(true));
  };
};

const handleLogoutEvent = () => ({
  type: constants.APPLICATION__LOGOUT_USER
});

export const handleRegister = handleRegisterEvent;
export const handleLogin = handleLoginEvent;
export const handleLogout = handleLogoutEvent;
