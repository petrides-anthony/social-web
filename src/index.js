import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <p>Login</p>
        </Route>
        <ProtectedRoute path="/">
          <p>Home</p>
        </ProtectedRoute>
      </Switch>
    </Router>
  );
};

let appContainer = document.getElementById("app");
ReactDOM.render(<App title="Social Web" />, appContainer);
