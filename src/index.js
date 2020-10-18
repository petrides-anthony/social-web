import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { AuthenticationProvider } from "./components/utils/Authentication";

import ProtectedRoute from "./components/utils/ProtectedRoute";
import LoginPage from "./components/pages/LoginPage";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";

//import "./index.pcss";

const App = () => {
  return (
    <AuthenticationProvider>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/about">
            <AboutPage />
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
