import React from "react";
import "./choose.scss";
import homeImage from "/home-img.jpg";
import { BsBoxFill } from "react-icons/bs";

const ChooseUs = () => {
  return (
    <>
      <div className="chooseus-container" id="whychooseus">
        <div className="row">
          <div className="left">
            <img src={homeImage} alt="" />
            <div className="image-insider">
              <h2>Incredible travel and adventure experiences</h2>
              <button>Enquire Now</button>
            </div>
          </div>
          <div className="right">
            <h2>Why choose us</h2>
            <h1>Why You Should Choose Our Rajasthan's Tour?</h1>
            <div className="details">
              <div className="detail-card">
                <BsBoxFill className="icon" />
                <div className="card-details">
                  <h2>Best value ahead</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quis inventore nihil consectetur neque saepe rerum.
                  </p>
                </div>
              </div>
              <div className="detail-card">
                <BsBoxFill className="icon" />
                <div className="card-details">
                  <h2>Best value ahead</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quis inventore nihil consectetur neque saepe rerum.
                  </p>
                </div>
              </div>
              <div className="detail-card">
                <BsBoxFill className="icon" />
                <div className="card-details">
                  <h2>Best value ahead</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quis inventore nihil consectetur neque saepe rerum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
