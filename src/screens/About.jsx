import React from "react";
import "./about.scss";
import aboutImg from "/about-img.jpg";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <>
      <div className="about-container" id="aboutus">
        <div className="row">
          <div className="left">
            <h2>about us</h2>
            <h1>Who we are?</h1>
            <h2>We are the Leading Rajasthan Tour Planners in India.</h2>
          </div>
          <div className="right">
            {" "}
            <p>
              We at <span>Rajasthan Travel Helpline</span> believe in offering
              only high-quality and professional assistance. Our team is working{" "}
              <span>24/7</span> just for your convenience.
            </p>
            <p>
              Rajasthan is one of India's leading tourist places, boasting
              magnificent forts and glorious royal palaces, which reverberate
              the sages of victory. Mouthwatering dishes, colorful culture,
              exquisite handicrafts, and architectural wonders are regarded as a
              few of the reasons why people love to choose our{" "}
              <span>Rajasthan tour packages.</span>
            </p>
            <p>
              Our aim is to make your travel journey the best moment of your
              life. As you know that Rajasthan is the home of different
              thrilling adventures. You can go for a ride on the hot air balloon
              in different places, such as Ranthambore, Pushkar, and Jaipur, and
              sail across the Rajasthani sky.
            </p>
            <button>
              Book Now <BsArrowRight className="icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
