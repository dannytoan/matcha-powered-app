import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav id="top-nav-container">
      <ul id="top-nav-ul">
        <li >
          <NavLink to="/" exact={true} activeClassName="active" className="top-nav-links">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" exact={true} activeClassName="active" className="top-nav-links">
            <i class="fa-regular fa-user"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-up" exact={true} activeClassName="active" className="top-nav-links">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" exact={true} activeClassName="active" className="top-nav-links">
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
