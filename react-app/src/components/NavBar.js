import React from "react";
import { NavLink, Link } from "react-router-dom";
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
          <Link to="/" exact={true}>
            <img
              id="nav-logo"
              src="https://res.cloudinary.com/matchaprince/image/upload/v1657157589/matcha_shark_logo_maiavt.png"
            />
          </Link>
          <div id="top-nav-category-links-ctnr">
            <li>
              <NavLink
                to="/products/all"
                exact={true}
                activeClassName="active"
                className="top-nav-links text category"
              >
                ALL PRODUCTS
              </NavLink>
            </li>
          </div>
          <div id="top-nav-auth-links-ctnr">
            {sessionUser ? (
              <></>
            ) : (
              <div id="nav-unsigned-in-btns-auth">
                <li>
                  <Link
                    to="/login"
                    exact={true}
                    className="top-nav-links text"
                    id="button-ctnr"
                  >
                    <i class="fa-regular fa-user"></i>
                    <div className="hide text">LOG IN</div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sign-up"
                    exact={true}
                    className="top-nav-links text signup-link"
                  >
                    <i class="fa-solid fa-user-plus"></i>
                    <div className="hide text">SIGN UP</div>
                  </Link>
                </li>
              </div>
            )}

            {sessionUser ? (
              <li>
                <Link
                  to="/cart"
                  exact={true}
                  className="top-nav-links text right-nav-icons"
                  id="button-ctnr"
                >
                  <i class="fa-solid fa-bag-shopping"></i>
                  <div className="hide text">YOUR BAG</div>
                </Link>
              </li>
            ) : (
              <></>
            )}
            {sessionUser ? (
              <li>
                <Link
                  to="/product/new"
                  exact={true}
                  activeClassName="active"
                  className="top-nav-links text"
                  id="button-ctnr"
                >
                  <i class="fa-solid fa-shop right-nav-icons"></i>
                  <div className="text hide sell-product-nav">SELL</div>
                </Link>
              </li>
            ) : (
              <></>
            )}
            {sessionUser ? (
              <Link to="/my-matchashark">
                <li className="profile-btn-ctnr right-nav-icons">
                  <i class="fa-solid fa-user"></i>
                  <div className="text hide">PROFILE</div>
                </li>
              </Link>
            ) : (
              <></>
            )}
            {sessionUser ? (
              <li>
                <LogoutButton />
              </li>
            ) : (
              <></>
            )}
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
