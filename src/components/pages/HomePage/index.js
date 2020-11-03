import React from "react";

import { useUsername } from "../../utils/Authentication";

import NavBar from "../../common/NavBar";
import PostList from "../../common/PostList";
import AddPost from "../../common/AddPost";

const HomePage = () => {
  const username = useUsername();

  return (
    <div>
      <NavBar />
      <div className="bg-gray-100 w-full bg-white rounded shadow-lg p-8 m-4 max-w-3xl md:mx-auto">
        <AddPost />
        <PostList />
      </div>
    </div>
  );
};

export default HomePage;
