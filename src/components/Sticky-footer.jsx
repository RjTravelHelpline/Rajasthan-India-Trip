import React from "react";
import "./sticky-footer.scss";
import { CiPhone } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { SiWhatsapp } from "react-icons/si";

const StickyFooter = () => {
  return (
    <>
      <div className="sticky-footer-container">
        <div className="row">
          <p>
            <CiPhone />
          </p>
          <p>
            <SiWhatsapp />
          </p>
          <p>
            <CiMail />
          </p>
          <p>
            <CiChat1 />
          </p>
        </div>
      </div>
    </>
  );
};

export default StickyFooter;
