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
            <h2>Why choose us?</h2>
            <h1>Some Good Reasons to Know</h1>
            <p>
              We strive hard to create exceptionally value-added and cherishable
              traveling experiences for each traveler who book Rajasthan Tour
              Package with us. With years of experience catering to a wide range
              of diverse tour and travel needs of visitors from within India and
              worldwide, we have made our name synonymous with quality,
              reliability, and affordability. Our core mission is to provide you
              a comprehensive holiday experience with the best quality service
              and value for money.
            </p>
            <div className="details">
              <div className="detail-card">
               
                <div className="card-details">
                  <h2>Packages</h2>
                  <p>
                    Hygiene is one of the most important thing in today's
                    scenerio. Jaipur Taxi Service provides fully sanitized taxi
                    car for Jaipur Local & Outstation Trips. Our all cars are
                    sanitized before & after each trip and all our vehicles are
                    equipped with Hand Sanitizers and Mask for Guest Use.
                  </p>
                </div>
              </div>
              <div className="detail-card">
               
                <div className="card-details">
                  <h2>Best Travel Experts</h2>
                  <p>
                    Jaipur Taxi Service provide well maintained taxi car to all
                    guest for Local & Outstation trip. All our taxi cars are
                    periodically checked by company authorized workshops. In
                    previous years only 0.80% break-down record of our taxi
                    cars.
                  </p>
                </div>
              </div>
              <div className="detail-card">
               
                <div className="card-details">
                  <h2>24 X 7 On-Trip Assistance</h2>
                  <p>
                    All our drivers are experienced, well-behaved, courteus,
                    soft spoken, police verified and holding commerical vehicle
                    driving licence issued by Transport Department. Jaipur Taxi
                    Service drivers are well trained to handle all kind of
                    situations occurred during the road journey and also well
                    versed with local roads and languages.
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
