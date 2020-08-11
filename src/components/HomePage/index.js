import React from "react";
import { useHistory } from "react-router-dom";

import { useLogout } from "../Authentication";

const HomePage = () => {
  const logout = useLogout();

  return (
    <div>
      <p>Home</p>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

export default HomePage;
