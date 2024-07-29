import React from "react";
import "./homebanner.scss";

const HomeBanner = () => {
  return (
    <>
      <div className="home-banner-container" id="home">
        <div className="row">
          <video
            class="bw-video"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
          >
            <source src="/home-banner-video2.mp4" type="video/mp4" />
          </video>
          <div className="left">
            <h2>Plan Your Dream Vacation Today 🛫</h2>
            <h1>
              <span> Unforgettable </span> Rajasthan Tours with us
            </h1>
          </div>
        </div>
        <div className="row">
          <h2>Welcome!</h2>
          <h1>Rajasthan <span>Tour Packages</span></h1>
          <p>
            If you want to explore the mesmerizing view and <span>beauty of Rajasthan</span> ,
            we have some fantastic deals for you. We not only offer the cheapest
            tour package for Rajasthan, but we also offer the <span>best traveling
            experience</span> of your life. Our professional team is available 24/7 to
            help you in any need. We know what traveling means for you, and
            that’s why our primary goal is to offer a <span>hassle-free journey</span>.
          </p>
          <p>
            We are the best Rajasthan Tour Planner with years of experience and
            favorites among travelers. All the necessities like <span>food, hotel
            stay, camping, adventure activities</span>, etc., are included in our tour
            packages. Visit with us once, and you’ll share your experience for
            years.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
