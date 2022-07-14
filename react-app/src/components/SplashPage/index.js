import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewProducts } from "../../store/products";
import { demouser } from "../../store/session";
import "./SplashPage.css";

function SplashPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const demoOnClick = async (e) => {
    e.preventDefault();
    await dispatch(demouser("demo@aa.io", "password"));
  };

  return (
    <div id="splash-page-container">
      {/* <div>
            <LoginForm />
        </div> */}
      <div id="h1-video-header-cntr">
        <h1 id="video-header-title" className="text">
          New
          Power, New
          Arrivals
        </h1>
      </div>
      <div id="video-header-container">
        <video id="video-header" autoPlay playsInline loop>
          <source
            type="video/mp4"
            src="https://res.cloudinary.com/matchaprince/video/upload/v1657175755/trimmed_mountains_AdobeExpress_hqply0.mp4"
          />
        </video>
        <div>
          <h2 className="text">Begin Exploring Now</h2>
          {sessionUser ? (
            <></>
          ) : (
            <button className="demo-btn" onClick={demoOnClick}>
              Demo User
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SplashPage;
