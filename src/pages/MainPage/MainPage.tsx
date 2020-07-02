import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

import "./MainPage.css";

import LoginComponent from "../../components/LoginComponent/LoginComponent";
import RegistrationComponent from "../../components/RegistrationComponent/RegistrationComponent";

function MainPage() {
  return (
    <Router>
      <div className="MainPage">
        <ul className="Navbar">
          <li>Task 5</li>
          <li>
            <Link to="/auth/login">Login</Link>
          </li>
          <li>
            <Link to="/auth/registration">Registration</Link>
          </li>
        </ul>
        <Switch>
          <Redirect from="/" exact to="/auth/login" />
          <Route path="/auth/login" component={LoginComponent} />
          <Route path="/auth/registration" component={RegistrationComponent} />
        </Switch>
      </div>
    </Router>
  );
}

export default MainPage;
