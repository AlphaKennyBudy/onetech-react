import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./MainPage.css";

import LoginComponent from "../../components/LoginComponent/LoginComponent";
import RegistrationComponent from "../../components/RegistrationComponent/RegistrationComponent";
import Navbar from "../../components/Navbar/Navbar";
import UserContext from "../../contexts/UserContext";

function MainPage() {
  const [token, setToken] = useState("No token");
  return (
    <UserContext.Provider value={{ token, setToken }}>
      <Router>
        <div className="MainPage">
          <Navbar />
          <Switch>
            <Redirect from="/" exact to="/auth/login" />
            <Route path="/auth/login" component={LoginComponent} />
            <Route
              path="/auth/registration"
              component={RegistrationComponent}
            />
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default MainPage;
