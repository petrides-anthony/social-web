import React, { useState, createRef } from "react";
import { useHistory } from "react-router-dom";

import { useLogin, useIsAuthenticated } from "../Authentication";

import LoginButton from "../OnPageComponents/LoginButton";
import NavBar from "../OnPageComponents/NavBar";

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
    <div>
      <NavBar />
        <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <h1 class="block w-full text-center text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase mb-6">Login Page</h1>
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" value={inputValue} onChange={e => setInputValue(e.target.value)} type="text" placeholder="Tell me your username" />
          <LoginButton InputValue={inputValue} Login={login}/>
      </div>
    </div>
  );
};

export default LoginPage;
