import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="row">
          <div className="footer-card">
            <h2>About</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              dolores voluptatum cupiditate delectus adipisci tenetur quasi,
              dicta commodi perferendis non molestias recusandae aliquid cumque
              est repellendus dolorem, eveniet nisi quas repudiandae nesciunt.
            </p>
          </div>
          <div className="footer-card">
            <h2>Links</h2>
            <p>Home</p>
            <p>Packages</p>
            <p>About Us</p>
            <p>Why Choose Us</p>
            <p>Connect</p>
          </div>
          <div className="footer-card">
            <h2>Contact</h2>
            <p>
              B-59 Sikar House, Behind Shiv Mandir,Jaipur-302016
              Rajasthan(India)
            </p>
            <p>5252525278</p>
            <p>7878787878</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
