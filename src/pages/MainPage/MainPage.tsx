import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Registration from "../../components/RegistrationComponent/Registration";
import Navbar from "../../components/Navbar/Navbar";
import UserContext from "../../contexts/UserContext";
import { MainPageWrapper } from "./MainPageComponents";
import Login from "../../components/Login/Login";

function MainPage() {
  const [token, setToken] = useState("No token");
  return (
    <UserContext.Provider value={{ token, setToken }}>
      <Router>
        <MainPageWrapper>
          <Navbar />
          <Switch>
            <Redirect from="/" exact to="/auth/login" />
            <Route path="/auth/login" component={Login} />
            <Route
              path="/auth/registration"
              component={Registration}
            />
          </Switch>
        </MainPageWrapper>
      </Router>
    </UserContext.Provider>
  );
}

export default MainPage;
