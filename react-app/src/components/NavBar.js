import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import "./NavBar.css";
import { useSelector } from "react-redux";
import SlidingBanner from "./SlidingBanner";

const NavBar = () => {

  const sessionUser = useSelector((state) => state.session.user);


  return (
    <div>


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
          {sessionUser ? <></> :
          <li>
            <NavLink
              to="/login"
              exact={true}
              activeClassName="active"
              className="top-nav-links text"
              id="button-ctnr"
              >
              <i class="fa-regular fa-user"></i>
              <div className="hide text">LOG IN</div>
            </NavLink>
          </li>
              }
              {sessionUser ? <></> :
                <li>
                  <NavLink
                    to="/sign-up"
                    exact={true}
                    activeClassName="active"
                    className="top-nav-links text signup-link"
                  >
                     <i class="fa-solid fa-user-plus"></i>
                  <div className="hide text">SIGN UP</div>
                  </NavLink>
                </li>
              }
              {sessionUser ?
          <li>
            <NavLink
              to="/product/new"
              exact={true}
              activeClassName="active"
              className="top-nav-links text"
              id="button-ctnr"
              >
              <i class="fa-solid fa-shop"></i>
              <div className="text hide">POST PRODUCT LISTING</div>
            </NavLink>
          </li>
            : <></>}
          {sessionUser ? <li>
            <LogoutButton />
          </li> : <></>}

        </div>
      </ul>
    </nav>
      <div>
      <SlidingBanner />
      </div>
    </div>
  );
};

export default NavBar;
