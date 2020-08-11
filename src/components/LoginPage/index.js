import React from "react";
import { useHistory } from "react-router-dom";

import { useLogin, useIsAuthenticated } from "../Authentication";

const LoginPage = () => {
  const history = useHistory();
  const isAuthenticated = useIsAuthenticated();

  // use react effect as opposed to a callback
  // to move to the home page after login;
  // this effect will run after the component mounts in screen
  // and when isAuthenticated changes (which happens after logging in);
  // his responsibility is to check whether you are logged in or not
  // and if you are it will redirect you to the home page;
  // it's safer to do this here as the LoginPage has full control
  // over the redirect, which makes the navigation flow clearer
  React.useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }, [isAuthenticated]);

  const login = useLogin();

  return (
    <div>
      <p>Login</p>
      <button onClick={() => login('Luca Colonnello')}>Login as Luca Colonnello</button>
    </div>
  );
};

export default LoginPage;
