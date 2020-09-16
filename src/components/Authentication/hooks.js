import React from 'react';
import AuthenticationContext from './AuthenticationContext';

const useIsAuthenticated = () => {
  const { authenticationState } = React.useContext(AuthenticationContext);
  return authenticationState.authenticated;
};

const useUsername = () => {
  const { authenticationState } = React.useContext(AuthenticationContext);
  return authenticationState.username;
};

const useLogin = () => {
  const { dispatch } = React.useContext(AuthenticationContext);

  const loginFromHook = username => {
    const loginAction = { type: 'login', payload: { username } };
    dispatch(loginAction);
  };

  return loginFromHook;
};

const useLogout = () => {
  const { dispatch } = React.useContext(AuthenticationContext);
  
  const logoutFromHook = () => {
    const logoutAction = { type: 'logout' };
    dispatch(logoutAction);
  };

  return logoutFromHook;
};

export {
  useIsAuthenticated,
  useUsername,
  useLogin,
  useLogout,
};
