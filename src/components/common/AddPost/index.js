import React, { useState } from "react";
import { useQuery } from "react-query";
import Button from "../Button";

// We need to finish the addPosts function by figuring out how to send data in a json format
// Refer to react query docs for mutations https://react-query.tanstack.com/docs/guides/mutations
// Search for fetch send json as body and use react query to coordinate the mutation

const AddPost = (props) => {
  const [postText, setPostText] = useState("");

  const AddPosts = async () => {
    const response = await fetch("http://localhost:3000/posts/");
    return await response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(postText);
  };

  return (
    <div className="flex mx-auto items-center justify-center shadow-lg mb-4">
      <form
        onSubmit={handleSubmit}
        className="w-full bg-white rounded-lg px-4 pt-2"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
            Add a new Post
          </h2>
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <textarea
              className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
              name="body"
              placeholder="Type Your Post"
              required
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              maxLength={150}
            />
          </div>
          <div className="w-full md:w-full flex items-start md:w-full px-3">
            <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
              <svg
                fill="none"
                className="w-5 h-5 text-gray-600 mr-1"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-xs md:text-sm pt-px">{postText.length}/150</p>
            </div>
            <div className="-mr-1">
              <Button type="submit">Post</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
