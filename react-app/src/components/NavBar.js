import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import "./NavBar.css";
import { useSelector } from "react-redux";

const NavBar = () => {

  const sessionUser = useSelector((state) => state.session.user);


  return (
    <nav id="top-nav-container">
      <ul id="top-nav-ul">
        <NavLink
          to="/"
          exact={true}
          activeClassName="active"
          className="top-nav-links text"
        >
          <img
            id="nav-logo"
            src="https://res.cloudinary.com/matchaprince/image/upload/v1657157589/matcha_shark_logo_maiavt.png"
          />
        </NavLink>
        <div id="top-nav-category-links-ctnr">
          <li>
            <NavLink
              to="/products/all"
              exact={true}
              activeClassName="active"
              className="top-nav-links text"
            >
             ALL PRODUCTS
            </NavLink>
          </li>
        </div>
        <div id="top-nav-auth-links-ctnr">
          <li>
            <NavLink
              to="/login"
              exact={true}
              activeClassName="active"
              className="top-nav-links text"
              >
              <i class="fa-regular fa-user"></i>
            </NavLink>
          </li>
              {sessionUser ? <></> :
                <li>
                  <NavLink
                    to="/sign-up"
                    exact={true}
                    activeClassName="active"
                    className="top-nav-links text"
                  >
                    Sign Up
                  </NavLink>
                </li>
              }
          <li>
            <NavLink
              to="/product/new"
              exact={true}
              activeClassName="active"
              className="top-nav-links text"
            >
              <i class="fa-solid fa-shop"></i>
            </NavLink>
          </li>
          {sessionUser ? <li>
            <LogoutButton />
          </li> : <></>}

        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
