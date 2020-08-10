import React from 'react';
import {
  Route,
  Redirect,
} from "react-router-dom";

export default function ProtectedRoute({ children, ...rest }) {
  // TODO
  const isAuthenticated = true;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
