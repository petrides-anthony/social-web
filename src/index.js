import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { AuthenticationProvider } from "./components/Authentication";

import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <AuthenticationProvider>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <ProtectedRoute path="/">
            <HomePage />
          </ProtectedRoute>
        </Switch>
      </Router>
    </AuthenticationProvider>
  );
};

let appContainer = document.getElementById("app");
ReactDOM.render(<App title="Social Web" />, appContainer);
