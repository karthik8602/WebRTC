import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

export default function LandingPage() {
  const router = useNavigate();

  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>Apna Vidio call</h2>
        </div>
        <div className="navlist">
          <p
            onClick={() => {
              router("/guestMode");
            }}
          >
            Join as guest
          </p>
          <p
            onClick={() => {
              router("/auth");
            }}
          >
            Register
          </p>
          <div
            onClick={() => {
              router("/auth");
            }}
            role="button"
          >
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1>
            <span style={{ color: "orange" }}>Connect </span>with your loved
            once
          </h1>
          <p>Cover a distance by apna vidio call</p>
          <div role="button">
            <Link to={"/auth"}>Get Started</Link>
          </div>
        </div>
        <div>
          <img src="/mobile.png" alt="" />
        </div>
      </div>
    </div>
  );
}
