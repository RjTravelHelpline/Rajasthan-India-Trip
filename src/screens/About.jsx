import React from "react";
import "./about.scss";
import aboutImg from "/about-img.jpg";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="row">
          <div className="left">
            <div className="image-container">
              <img src={aboutImg} />
              <p>
                Experience Spanning Over <span>Ten Years </span>✨
              </p>
            </div>
          </div>
          <div className="right">
            {" "}
            <h2>about us</h2>
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              optio sequi sint aliquam animi temporibus, enim maiores ratione
              magnam quibusdam. Sunt debitis animi deleniti ad ex voluptas
              libero ullam? Ea fugiat unde ullam. Natus esse quae tempora non!
            </p>
            <div className="about-extra">
              <h2>Travel and Experience The Adventure</h2>
              <p>
                <span>Exclusive Offers:</span> Unique travel opportunities.
              </p>
              <p>
                <span>Immersive Trips:</span> Dive into new cultures.
              </p>
              <p>
                <span>Exciting Adventures:</span> Unforgettable thrills.
              </p>

              <button>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
