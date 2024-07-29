import React from "react";
import "./moment.scss";

const Moments = () => {
  return (
    <>
      <div className="moments-container">
        <div className="row">
          <h2>Memorable Moments</h2>
          <h1>See How Our Guests Enjoyed Their Adventures</h1>
          <div className="moments-gallery">
            <img src="/WhatsAppImage2.jpeg" alt="" />
            <img src="/WhatsAppImage3.jpeg" alt="" />
            <img src="/WhatsAppImage4.jpeg" alt="" />
            <img src="/WhatsAppImage5.jpeg" alt="" />
            <img src="/WhatsAppImage6.jpeg" alt="" />
            <img src="/WhatsAppImage7.jpeg" alt="" />
            {/* <img src="/WhatsAppImage.jpeg" alt="" /> */}
            {/* <img src="/Federic Drouin.jpg" alt="" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Moments;
