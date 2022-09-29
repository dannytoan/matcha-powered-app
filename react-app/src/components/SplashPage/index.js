import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { viewProducts } from "../../store/products";
import { demouser } from "../../store/session";
import "./SplashPage.css";
import SplashMiniShop from "../SplashMiniShop";

function SplashPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const products = useSelector((state) => {
    return Object.values(state.products);
  });
  const monthlyItem = products[0];
  const shopOneItems = [products[5],products[6],products[7],products[8]]

  const demoOnClick = async (e) => {
    e.preventDefault();
    history.push("/products/all");
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
      {/* <div id="bottom-page-container">
        <img id="text-bottom-test"src="https://res.cloudinary.com/matchaprince/image/upload/v1657838099/bottom_infographic_mi2lhf.png"/>
        <div id="left-side-bottom-container">
        <h2 className="text bottom-splash-desc-title">
          Your new favorite online marketplace <br /> for all things fitness
        </h2>
        <img
          id="fitness-bottom-infographic-pic"
          src="https://res.cloudinary.com/matchaprince/image/upload/v1657840126/My_project_1_otjhnv.png"
        />

        {sessionUser ? (
          <></>
        ) : (
          <a href="/sign-up">
            <button className="splash-bottom-singup-btn">
              Sign Up for Free
            </button>
          </a>
        )}
        </div>
        <div id="right-side-bottom-container"></div>
      </div> */}

      {/* ---------------------------------- BOTTOM FIRST CONTAINER ----------------------------------*/}
      <div id="bottom-page-container">
        <div id="bottom-header-one">
          <div id="bottom-header-h1-cntr">
            <h1 id="bottom-header-h1">
              NEW STUDIO: <br /> WATCH ME FLOW
            </h1>
            <p id="bottom-h1-text">
              Bright colours, zero-distraction designs & a second skin feel
            </p>
            <a href="/products/all">
              <button className="bottom-header-shop-btn">Shop Now</button>
            </a>
          </div>

          {/* ---------- NEED TO ADD GRADIENT -------------------------- */}

          <div id="div-with-img-and-grad">
            <img
              id="bottom-header-img-one"
              src="https://res.cloudinary.com/matchaprince/image/upload/v1659380869/Studio_Yoga_Desktop_1_xhiw8s.webp"
            />
            {/* <div id="bottom-header-img-one-gradient"></div> */}
          </div>
        </div>
        {/* ---------------------------------- BOTTOM FIRST SHOP CONTAINER ----------------------------------*/}

        <div id="bottom-first-shop-ctnr">
          <SplashMiniShop shopOneItems={shopOneItems}/>
        </div>
      </div>
    </div>
  );
}

export default SplashPage;
