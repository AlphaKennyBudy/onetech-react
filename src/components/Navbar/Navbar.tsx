import React, { useContext } from "react";

import UserContext from "../../contexts/UserContext";
import {
  NavbarWrapper,
  Logo,
  NavbarList,
  NavbarListItem,
  NavbarLink,
} from "./NavbarComponents";

function Navbar() {
  const { token } = useContext(UserContext)!;

  return (
    <NavbarWrapper>
      <Logo>{token}</Logo>
      <NavbarList>
        <NavbarListItem>
          <NavbarLink to="/auth/login">Login</NavbarLink>
        </NavbarListItem>
        <NavbarListItem>
          <NavbarLink to="/auth/registration">Registration</NavbarLink>
        </NavbarListItem>
      </NavbarList>
    </NavbarWrapper>
  );
}

export default Navbar;
