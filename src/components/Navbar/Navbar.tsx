import React from "react";

import { Link } from "react-router-dom";

import "./Navbar.css";

import ModeSwitcher from "../ModeSwitcher/ModeSwitcher";
import LangSwitcher from "../LangSwitcher/LangSwitcher";

import { navbar as EN } from "../../lang/en.json";
import { navbar as RU } from "../../lang/ru.json";
import useLang from "../../hooks/useLang";

function Navbar() {
  const ctx = useLang()!.lang ? EN : RU;
  return (
    <nav className="Navbar">
      <ul className="Navbar__list">
        <li>
          <Link className="Navbar__list__item" to="/">
            <div id="headshot">
              <img
                src="https://avatars2.githubusercontent.com/u/48881444?s=460&u=a2317274ce4b7c57e3c87e604e55595d65d02a2a&v=4"
                alt="Logo"
              />
            </div>
          </Link>
        </li>
        <li>
          <Link className="Navbar__list__item" to="/projects">
            {ctx.projects}
          </Link>
        </li>
        <li>
          <Link className="Navbar__list__item" to="/contacts">
            {ctx.contacts}
          </Link>
        </li>
        <li className="Navbar__list__item">
          <ModeSwitcher />
        </li>
        <li className="Navbar__list__item">
          <LangSwitcher />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
