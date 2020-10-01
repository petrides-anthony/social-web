import React, { useState } from "react";


const LoginButton = (props) => {

  return (
    <button 
        className="group relative flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
        onClick={() => {props.Login(props.InputValue);}}>

        {props.InputValue ? `Login as ${props.InputValue}` : 'Login'}

    </button>
  );
};

export default LoginButton;

