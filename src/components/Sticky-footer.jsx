import React from "react";
import "./sticky-footer.scss";

const StickyFooter = () => {
  return (
    <>
      <div className="sticky-footer-container">
        <div className="row">
          <div className="icon-container">
            <a href="tel:9024337038">
              <img src="/telephone.png" alt="telephone" />
            </a>
          </div>

          <div className="icon-container">
            <a
              href="https://api.whatsapp.com/send?phone=919166555888
"
            >
              <img src="/whatsapp.png" alt="whatsapp" />
            </a>
          </div>
          <div className="icon-container">
            <a href="mailto:mail@rajasthantravelhelpline.com">
              <img src="/gmail.png" alt="gmail" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyFooter;
