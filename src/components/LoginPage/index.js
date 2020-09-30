import React, { useState, createRef } from "react";
import { useHistory } from "react-router-dom";

import { useLogin, useIsAuthenticated } from "../Authentication";

const LoginPage = () => {
  const [inputValue, setInputValue] = useState('');

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
    <div className="container mx-auto px-4">
      <p><strong>Login Page</strong></p>

      <input value={inputValue} onChange={e => setInputValue(e.target.value)} type="text" placeholder="Tell me your username" />

      <button className="group relative flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out" onClick={() => {
        login(inputValue);
      }}>{inputValue ? `Login as ${inputValue}` : 'Login'}
      </button>

    </div>
  );
};

export default LoginPage;
