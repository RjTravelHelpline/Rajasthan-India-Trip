import React from "react";
import "./homebanner.scss";

const HomeBanner = () => {
  return (
    <>
      <div className="home-banner-container">
        <div className="row">
          <div className="left">
            <h2>
              Plan Your <span> Dream Vacation 🛫</span> Today!
            </h2>
            <h1>
              Customize your package needs & get a <span>personalized </span>
              quote now!
            </h1>
          </div>
          <div className="right">
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="number" placeholder="Contact Number" required />
              <hr />
              <h2>Tour Details</h2>
              <input type="date" placeholder="Date" required />
              <input type="text" placeholder="Tour/destination" required />
              <button>Enquire Now</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
