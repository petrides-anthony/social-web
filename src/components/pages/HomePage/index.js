import React from "react";

import { useLogout, useUsername } from "../../utils/Authentication";

import NavBar from "../../common/NavBar";
import Button from "../../common/Button";
import PostList from "../../common/PostList";

const HomePage = () => {
  const username = useUsername();

  return (
    <div>
      <NavBar />
      <div className="bg-gray-100 w-full bg-white rounded shadow-lg p-8 m-4 max-w-3xl md:mx-auto">
        <div className="container px-4">
          <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase mt-4 text-center">
            Welcome Home {username}
          </p>
        </div>
      </div>
      <div className="bg-gray-100 w-full bg-white rounded shadow-lg p-8 m-4 max-w-3xl md:mx-auto">
        <PostList />
      </div>
    </div>
  );
};

export default HomePage;

// task
// tailwind css with post css and parcel to style homepage/ login page
// Ref; https://mertjf.github.io/tailblocks/
// https://tailwindui.com/components/application-ui/forms/sign-in-forms
