import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./MainPage.css";

import Navbar from "../../components/Navbar/Navbar";
import CVPage from "../CVPage/CVPage";
import ProjectPage from "../ProjectPage/ProjectPage";
import ContactPage from "../ContactPage/ContactPage";
import ModeContext from "../../contexts/ModeContext";
import LangContext from "../../contexts/LangContext";

import Modes from "../../styles/modes.json";

function MainPage() {
  const [mode, setMode] = useState(true);
  const [lang, setLang] = useState(true);

  const changeMode = () => {
    let Mode;
    if (mode) {
      Mode = Modes.dark;
    } else {
      Mode = Modes.light;
    }

    for (let [key, value] of Object.entries(Mode)) {
      document.documentElement.style.setProperty(key, value);
    }
  };

  useEffect(() => {
    changeMode();
  }, [mode]);

  return (
    <Router>
      <div className="MainPage">
        <LangContext.Provider value={{ lang, setLang }}>
          <ModeContext.Provider value={{ mode, setMode }}>
            <Navbar />
            <Switch>
              <Route path="/" exact component={CVPage} />
              <Route path="/projects" component={ProjectPage} />
              <Route path="/contacts" component={ContactPage} />
            </Switch>
          </ModeContext.Provider>
        </LangContext.Provider>
      </div>
    </Router>
  );
}

export default MainPage;
