import React from "react";
import "./sticky-footer.scss";

const StickyFooter = () => {
  return (
    <>
      <div className="sticky-footer-container">
        <div className="row">
          <div className="icon-container">
            <a href="">
              <img src="/telephone.png" alt="telephone" />
            </a>
          </div>

          <div className="icon-container">
            <a href="">
              <img src="/whatsapp.png" alt="whatsapp" />
            </a>
          </div>
          <div className="icon-container">
            <a href="">
              <img src="/gmail.png" alt="gmail" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyFooter;
