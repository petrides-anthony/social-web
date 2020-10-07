import React, { useState, createRef } from "react";
import { useHistory } from "react-router-dom";

import { useLogin, useIsAuthenticated } from "../Authentication";

import Button from "../OnPageComponents/Button";
import NavBar from "../OnPageComponents/NavBar";

const LoginPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);

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

  const onLoginButtonClick = () => {
    if (!inputValue) {
      setError(true);
      return;
    }

    login(inputValue);
  };

  const onInputChange = (e) => {
    setError(false);
    setInputValue(e.target.value);
  };

  return (
    <div>
      <NavBar />
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <h1 className="block w-full text-center text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase mb-6">Login Page</h1>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            value={inputValue}
            onChange={onInputChange}
            type="text"
            placeholder="Tell me your username"
          />

          {error ? (
            <p className="text-red-700 italic">
              You need to specify a username in order to login.
            </p>
          ) : null}
          <Button onClick={onLoginButtonClick}>
            {inputValue ? `Login as ${inputValue}` : 'Login'}
          </Button>
      </div>
    </div>
  );
};

export default LoginPage;
