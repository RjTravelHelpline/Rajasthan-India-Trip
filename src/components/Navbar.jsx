import { useState } from "react";
import React from "react";
import "./navbar.scss";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { MdClearAll } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="nav-container">
        <div className="upper-nav">
          <div className="row">
            <p>
              <span>Address: </span>
              B-59 Sikar House, Behind Shiv Mandir,Jaipur-302016
              Rajasthan(India)
            </p>
            <div className="icons">
              <a
                href="https://www.facebook.com/rajasthantravelhelpline/"
                target="_blank"
              >
                <CiFacebook className="social-icon" />
              </a>

              <a
                href="https://www.instagram.com/rajasthantravelhelpline/"
                target="_blank"
              >
                <CiInstagram className="social-icon" />
              </a>
              <a href="mailto:mail@rajasthantravelhelpline.com" target="_blank">
                <CiMail className="social-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="left">
            <a href="/">
              <h2>
                Rajasthan <span>Tour Packages</span>{" "}
              </h2>{" "}
            </a>
          </div>

          <div className="right">
            <button className="menu-toggle" onClick={toggleMenu}>
              <MdClearAll />
            </button>
            <div className={`nav-links ${isOpen ? "open" : ""}`}>
              <a
                href="#home"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Home
              </a>
              <a
                href="#packages"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Packages
              </a>
              <a
                href="#whychooseus"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Why Choose Us
              </a>
              <a
                href="#contact"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
