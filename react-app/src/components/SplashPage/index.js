import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewProducts } from "../../store/products";
import "./SplashPage.css"
import LoginForm from "../auth/LoginForm";


function SplashPage() {
  return (
    <div>
        {/* <div>
            <LoginForm />
        </div> */}
        <div>
            <h1 id="video-header-title" className="text">New <br/>Power, <br/> New <br/>Arrivals</h1>
        </div>
      <div id="video-header-container">
        <video id="video-header" autoPlay playsInline loop>
          <source
            type="video/mp4"
            src="https://res.cloudinary.com/matchaprince/video/upload/v1657175755/trimmed_mountains_AdobeExpress_hqply0.mp4"
          />
        </video>
      </div>
    </div>
  );
}

export default SplashPage;
