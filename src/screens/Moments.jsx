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
            <img src="/WhatsAppImage2.jpeg" alt="Moments Images" title="Moment1" />
            <img src="/WhatsAppImage3.jpeg" alt="Moments Images" title="Moment2" />
            <img src="/WhatsAppImage4.jpeg" alt="Moments Images" title="Moment3" />
            <img src="/WhatsAppImage5.jpeg" alt="Moments Images" title="Moment4" />
            <img src="/WhatsAppImage6.jpeg" alt="Moments Images" title="Moment5" />
            <img src="/WhatsAppImage7.jpeg" alt="Moments Images" title="Moment6" />
            {/* <img src="/WhatsAppImage.jpeg" alt="" /> */}
            {/* <img src="/Federic Drouin.jpg" alt="" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Moments;
