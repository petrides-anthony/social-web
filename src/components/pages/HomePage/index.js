import React from "react";

import { useLogout, useUsername } from "../../utils/Authentication";

import NavBar from "../../common/NavBar";
import Button from "../../common/Button";
import PostList from "../../common/PostList";

const HomePage = () => {
  const logout = useLogout();
  const username = useUsername();

  return (
    <div>
    <NavBar/>
    <div className="content-center w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
      <div className="container mx-auto px-4">
        <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase mt-4">Welcome Home {username}</p>
        <Button onClick={() => logout()}>
          Logout
        </Button>
      </div>
      </div>
      <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
      <PostList user="0"/>
      </div>
    </div>
  );
};

export default HomePage;


// task
// tailwind css with post css and parcel to style homepage/ login page
// Ref; https://mertjf.github.io/tailblocks/
// https://tailwindui.com/components/application-ui/forms/sign-in-forms