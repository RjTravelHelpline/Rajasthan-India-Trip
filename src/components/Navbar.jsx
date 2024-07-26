import React from "react";
import "./navbar.scss";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="upper-nav">
          <div className="row">
            <p>
              <span>Locate: </span>
              B-59 Sikar House, Behind Shiv Mandir,Jaipur-302016
              Rajasthan(India)
            </p>
            <div className="icons">
              <CiFacebook className="social-icon" />
              <CiInstagram className="social-icon" />
              <CiTwitter className="social-icon" />
              <CiLinkedin className="social-icon" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="left">
            <a to="/">
              <h2>
                Rajasthan <span>Tour Packages</span>{" "}
              </h2>{" "}
            </a>
          </div>

          <div className="right">
            <a href="#home">Home</a>
            <a href="#home">Packages</a>
            <a href="#home">About Us</a>
            <a href="#whychooseus">Why Choose Us</a>
            <a href="#home">Connect</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
