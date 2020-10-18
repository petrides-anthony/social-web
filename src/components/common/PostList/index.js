import React from "react";
import { useQuery } from "react-query";

const getPosts = async () => {
  const response = await fetch("http://localhost:3000/posts");
  return await response.json();
}

const PostList = (props) => {
  const { status, data, isFetching, error } = useQuery("posts", getPosts);

  if (status === "loading") {
    return <div>loading...</div>; // loading state
  }

  if (status === "error") {
    return <div>{error.message}</div>; // error state
  }
  
  console.log(data);

  const postData = data[`${props.user}`];
  const postUser = postData.user;
  const postDate = postData.timestamp;
  const postContent = postData.content;
  const postLikes = postData.likes;

  return (

    <div>
        <p>- User: {postUser}</p>
        <p>- Date Posted: {postDate}</p>
        <p>- Content: {postContent}</p>
        <p>- Likes: {postLikes}</p>
    </div>
  );
};

export default PostList;
