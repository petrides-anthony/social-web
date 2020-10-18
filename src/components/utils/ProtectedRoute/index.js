import React from 'react';
import {
  Route,
  Redirect,
} from "react-router-dom";

import { useIsAuthenticated } from '../Authentication';

export default function ProtectedRoute({ children, ...rest }) {
  const isAuthenticated = useIsAuthenticated();

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
