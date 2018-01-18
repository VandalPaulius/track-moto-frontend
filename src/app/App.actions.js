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

    fetch(`${process.env.REACT_APP_API_URL}/user`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      //headers: new Headers({ 'Content-Type': 'application/json' }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({
        email: userData.email,
        //username: userData.userName,
        password: userData.password
      })
    })
      .then((res) => {
        console.log('res', res);
        if (res.ok) {
          res.json().then((body) => {
            console.log('body', body);
            // dispatch(setUserData(body));
            // dispatch(setAuthorizedStatus(true));
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
    fetch(`${process.env.REACT_APP_API_URL}/auth`, {
      method: 'POST',
      mode: 'cors',
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

// const handleLogoutEvent = () => ({
//   type: constants.APPLICATION__LOGOUT_USER
// });
const handleLogoutEvent = (userUid) => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_API_URL}/auth`, {
      method: 'DELETE',
      mode: 'cors',
      credentials: 'include',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({
        email: userUid
      })
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((body) => {
            dispatch({ type: constants.APPLICATION__LOGOUT_USER });
            dispatch({ type: 'RESET_STATE' });
          });
        } else {
          res.text().then(text => coreMessageEmit('error', `Error: ${text}`));
        }
      })
      .catch(err => coreMessageEmit('error', `Error: ${err}`));
  };
};

export const handleRegister = handleRegisterEvent;
export const handleLogin = handleLoginEvent;
export const handleLogout = handleLogoutEvent;
