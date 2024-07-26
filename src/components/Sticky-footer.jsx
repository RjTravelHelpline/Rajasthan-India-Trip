import React from "react";
import "./sticky-footer.scss";
import { CiHome } from "react-icons/ci";
import { BsBook } from "react-icons/bs";
import { BsChatRightHeart } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";

const StickyFooter = () => {
  return (
    <>
      <div className="sticky-footer-container">
        <div className="row">
          <p>
            <CiHome />
          </p>
          <p>
            <BsBook />
          </p>
          <p>
            <BsChatRightHeart />
          </p>
          <p>
            <RiContactsLine />
          </p>
        </div>
      </div>
    </>
  );
};

export default StickyFooter;
