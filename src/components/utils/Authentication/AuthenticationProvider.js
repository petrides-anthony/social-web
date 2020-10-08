import React from 'react';
import AuthenticationContext, { initialState } from './AuthenticationContext';

const authenticationReducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return {
        authenticated: true,
        username: action.payload.username
      };
    case 'logout':
      return {
        ...initialState
      };
    default:
      return state;
  }
}

const AuthenticationProvider = ({ children }) => {
  const [authenticationState, dispatch] = React.useReducer(authenticationReducer, initialState);

  return (
    <AuthenticationContext.Provider value={{ authenticationState, dispatch }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
