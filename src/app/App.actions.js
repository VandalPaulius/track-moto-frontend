import * as constants from './App.constants';

const coreMessageEmit = (type, message) => {
  if (type === 'error') {
    console.error(message);
    return;
  }
  console.log(message);
};

const setAuthorizedStatus = status => ({
  type: constants.APPLICATION__SET_AUTHORIZED_STATUS,
  data: status
});

const setUserData = data => ({
  type: constants.APPLICATION__LOGIN_USER,
  data
});

// const handleRegisterEvent = (userData) => {
//   return (dispatch) => {
//     const data = {
//       uid: 'userUid',
//       name: 'User Useriano',
//       token: 'temporaryUserLoginToken'
//     };

//     dispatch(setUserData(data));
//     dispatch(setAuthorizedStatus(true));
//   };
// };

const handleRegisterEvent = (userData) => {
  return (dispatch) => {
    const isValid = (data) => {
      if (data.password !== data.passwordRepeat) {
        coreMessageEmit('error', 'Error: passwords do not match');
        return;
      }
      return true;
    };

    if (!isValid(userData)) {
      return;
    }

    fetch(`${process.env.REACT_APP_API_URL}/users`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({
        email: userData.email,
        username: userData.userName,
        password: userData.password
      })
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((body) => {
            dispatch(setUserData(body));
            dispatch(setAuthorizedStatus(true));
          });
        } else {
          res.text().then(text => coreMessageEmit('error', `Error: ${text}`));
        }
      })
      .catch(err => coreMessageEmit('error', `Error: ${err}`));
  };
};

const handleLoginEvent = (userData) => {
  // return (dispatch) => {
  //   const data = {
  //     uid: 'userUid',
  //     name: 'User Useriano',
  //   };

  //   dispatch(setUserData(data));
  //   dispatch(setAuthorizedStatus(true));
  // };
  console.log('userData', userData);
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_API_URL}/users`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({
        email: userData.email,
        password: userData.password
      })
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((body) => {
            dispatch(setUserData(body));
            dispatch(setAuthorizedStatus(true));
          });
        } else {
          res.text().then(text => coreMessageEmit('error', `Error: ${text}`));
        }
      })
      .catch(err => coreMessageEmit('error', `Error: ${err}`));
  };
};

const handleLogoutEvent = () => ({
  type: constants.APPLICATION__LOGOUT_USER
});

export const handleRegister = handleRegisterEvent;
export const handleLogin = handleLoginEvent;
export const handleLogout = handleLogoutEvent;
