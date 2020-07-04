import { Link } from "react-router-dom";
import styled from "styled-components";

const color = "#FEA04F";

const NavbarWrapper = styled.div`
  width: 100%;
  height: 10%;
  background: #353740;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color};

  position: fixed;
  top: 0;
  left: 0;
`;
const NavbarList = styled.ul`
  width: 50%;
  height: 100;
  display: flex;
  list-style: none;
  justify-content: space-around;
  align-items: center;
`;
const NavbarListItem = styled.li``;
const NavbarLink = styled(Link)`
  text-decoration: none;
  color: ${color};

  &:hover,
  &:active {
    border-bottom: 1px solid ${color};
  }
`;
const Logo = styled.h1`
  max-width: 200px;
  font-size: 10px;
`;

export { NavbarWrapper, NavbarList, NavbarListItem, NavbarLink, Logo };
