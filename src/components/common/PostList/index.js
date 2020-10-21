import React from "react";
import { useQuery } from "react-query";

import Post from "../Post";

const getPosts = async () => {
  const response = await fetch("http://localhost:3000/posts");
  return await response.json();
};

const PostList = (props) => {
  const { status, data, isFetching, error } = useQuery("posts", getPosts);

  if (status === "loading") {
    return <div>loading...</div>; // loading state
  }

  if (status === "error") {
    return <div>{error.message}</div>; // error state
  }

  console.log(data);

  return (
    <div>
      {data.map((postData) => (
        <Post key={postData._id} postData={postData} />
      ))}
    </div>
  );
};

export default PostList;
