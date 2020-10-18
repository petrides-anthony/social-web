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

    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Posts
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
            Full Post details below
          </p>
        </div>
        <div>
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Username
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {postUser}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Date Posted
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {postDate}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Content
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {postContent}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Likes
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {postLikes} people liked this
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Comments
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                Functionality TBC
              </dd>
            </div>
          </dl>
        </div>
        </div>

    </div>
  );
};

export default PostList;
