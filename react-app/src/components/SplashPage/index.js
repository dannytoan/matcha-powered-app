import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { viewProducts } from "../../store/products";
import { demouser } from "../../store/session";
import "./SplashPage.css";

function SplashPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const products = useSelector((state) => {
    return Object.values(state.products);
  });
  const monthlyItem = products[0];
  console.log(monthlyItem.image_url_1);

  const demoOnClick = async (e) => {
    e.preventDefault();
    // history.push("/products/all");
    await dispatch(demouser("demo@aa.io", "password"));
  };

  return (
    <div id="splash-page-container">
      {/* <div>
            <LoginForm />
        </div> */}
      <div id="video-header-container">
        <div>
          <h1 id="video-header-title" className="text">
            New <br />
            Power <br /> New <br />
            Arrivals
          </h1>
        </div>
        <div>
          <h1 id="video-header-title-2" className="text">
            Get <br />
            Ready <br /> Get <br />
            Active
          </h1>
        </div>
        <video id="video-header" autoPlay playsInline loop>
          <source
            type="video/mp4"
            src="https://res.cloudinary.com/matchaprince/video/upload/v1657175755/trimmed_mountains_AdobeExpress_hqply0.mp4"
          />
        </video>
        <div id="sign-in-buttons-splash">
          <div id="monthly-item-container">
            <h2 id="featured-product-h2" className="text">
              FEATURED PRODUCT
            </h2>
            <a id="product-listing-link" href={`/product/${monthlyItem?.id}`}>
              <img id="monthly-item-img" src={monthlyItem?.image_url_1} />
            </a>
          </div>
          {sessionUser ? (
            <div id="welcome-btn-cntr">
              <a href="/products/all">
                <button className="text welcome-msg-splash">Browse</button>
              </a>
            </div>
          ) : (
            <div id="non-logged-in-btns-cntr">
              <a href="/login">
                <button className="login-splash-btn">Login</button>
              </a>
              <button className="demo-btn" onClick={demoOnClick}>
                Demo User
              </button>
            </div>
          )}
        </div>
      </div>
      <div id="bottom-page-container">
        <div id="left-side-bottom-container"></div>
        <div id="right-side-bottom-container"></div>
      </div>
    </div>
  );
}

export default SplashPage;
