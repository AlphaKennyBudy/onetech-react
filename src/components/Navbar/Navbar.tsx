import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import UserContext from "../../contexts/UserContext";

function Navbar() {
  const { token } = useContext(UserContext)!;
  return (
    <div className="Navbar">
      <ul className="Navbar__list">
        <li>{token}</li>
        <li>
          <Link to="/auth/login">Login</Link>
        </li>
        <li>
          <Link to="/auth/registration">Registration</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
