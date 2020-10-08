import React from 'react';

export const initialState = {
  authenticated: false,
  username: null
};

export default React.createContext({
  authenticationState: initialState,
  dispatch: () => {}
});
