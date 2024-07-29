import React from "react";
import "./footer.scss";
import { CiFacebook } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import useTawkTo from "../useTalkTo";
import { Link } from "react-router-dom";

const Footer = () => {
  useTawkTo();
  return (
    <>
      <div className="footer-container" id="contact">
        <div className="row">
          <div className="footer-card">
            {/* <h2>Rajasthan Tour Packages</h2> */}
            <img src="/RTH-logo.jpg" alt="RTH-Logo" />
          </div>
          <div className="footer-card">
            <h2>About</h2>
            <p>
              We at <span>Rajasthan Travel Helpline</span> believe in offering
              only high-quality and professional assistance. Our team is working
              24/7 just for your convenience. Our aim is to make your travel
              journey the best moment of your life. As you know that Rajasthan
              is the home of different thrilling adventures. You can go for a
              ride on the hot air balloon in different places, such as
              Ranthambore, Pushkar, and Jaipur, and sail across the Rajasthani
              sky.
            </p>
          </div>
          <div className="footer-card">
            <h2>Contact Us</h2>
            <p>
              B-59 Sikar House, Behind Shiv Mandir,Jaipur-302016
              Rajasthan(India)
            </p>
            <a href="tel:+1234567890"></a>
            <p>📞+91-5252525252</p>
            <a href="tel:+1234567890"></a>
            <p>📞+91-5252525252</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/rajasthantravelhelpline/">
                <CiFacebook className="icon" />
              </a>
              <a href="https://www.instagram.com/rajasthantravelhelpline/">
                <CiInstagram className="icon" />
              </a>
              <a href="">
                <CiMail className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
