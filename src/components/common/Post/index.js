import React from "react";

const Post = (props) => {
  const postData = props.postData;
  const postUser = postData.user;
  const postDate = postData.timestamp;
  const postContent = postData.content;
  const postLikes = postData.likes;

  //ToDO:
  // Day Js - use this to format date.

  return (
    <div className="font-sans">
      <div className="bg-white max-w-xl mx-auto my-8 border border-grey-light">
        <div className="flex pt-4 px-4">
          <div className="px-2 pt-2 flex-grow">
            <header>
              <a href="#" className="text-black no-underline">
                <span className="font-medium">{postUser}</span>
              </a>
              <div className="text-xs text-grey flex items-center my-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 mr-1 feather feather-calendar"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span>{postDate}</span>
              </div>
            </header>
            <article className="py-4 text-grey-darkest">{postContent}</article>
            <footer className="border-t border-grey-lighter text-sm flex">
              <button
                href="#"
                className="block no-underline text-blue flex px-4 py-2 items-center hover:bg-grey-lighter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current"
                >
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
                <span>{postLikes} Likes</span>
              </button>
              <a
                href="#"
                className="block no-underline text-black flex px-4 py-2 items-center hover:bg-grey-lighter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-message-circle h-6 w-6 mr-1"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                <span>Reply</span>
              </a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
