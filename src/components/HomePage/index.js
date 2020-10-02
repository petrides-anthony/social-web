import React from "react";
import { useHistory } from "react-router-dom";

import { useLogout, useUsername } from "../Authentication";

import NavBar from "../OnPageComponents/NavBar";

const HomePage = () => {
  const logout = useLogout();
  const username = useUsername();

  return (
    <div>
    <NavBar/>
      <div className="container mx-auto px-4">
        <p>Welcome Home {username}</p>
        <br/>
        <button className="group relative flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out" onClick={() => logout()}>Logout</button>
      </div>
    </div>
  );
};

export default HomePage;


// task
// tailwind css with post css and parcel to style homepage/ login page
// Ref; https://mertjf.github.io/tailblocks/
// https://tailwindui.com/components/application-ui/forms/sign-in-forms