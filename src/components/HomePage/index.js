import React from "react";
import { useHistory } from "react-router-dom";

import { useLogout, useUsername } from "../Authentication";

const HomePage = () => {
  const logout = useLogout();
  const username = useUsername();

  return (
    <div>
      <p>Welcome Home {username}</p>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

export default HomePage;


// task
// tailwind css with post css and parcel to style homepage/ login page