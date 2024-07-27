import React from "react";
import "./home.scss";
import cardImg from "/card-img01.webp";
import Footer from "../components/Footer";
import StickyFooter from "../components/Sticky-footer";
import ChooseUs from "./ChooseUs";
import About from "./About";
import HomeBanner from "./HomeBanner";

const Home = () => {
  const cardContents = [
    {
      title: "Jaipur Pushkar Tour Package",
      inclusion1: "Transportation in Sedan AC Taxi",
      inclusion2: "Driver Allowance & Fuel",
    },
    {
      title: "Agra Delhi Tour Package",
      inclusion1: "Transportation in SUV",
      inclusion2: "Guide Service",
    },
    {
      title: "Goa Beach Tour Package",
      inclusion1: "Beachfront Accommodation",
      inclusion2: "Breakfast Included",
    },
    {
      title: "Kerala Backwaters Tour Package",
      inclusion1: "Houseboat Stay",
      inclusion2: "All Meals Included",
    },
    {
      title: "Rajasthan Desert Tour Package",
      inclusion1: "Camel Safari",
      inclusion2: "Cultural Evening",
    },
    {
      title: "Mumbai City Tour Package",
      inclusion1: "City Sightseeing",
      inclusion2: "Lunch Included",
    },
    {
      title: "Kashmir Valley Tour Package",
      inclusion1: "Shikara Ride",
      inclusion2: "Local Guide",
    },
    {
      title: "Himachal Adventure Tour Package",
      inclusion1: "Trekking",
      inclusion2: "Camping Gear",
    },
    {
      title: "Andaman Islands Tour Package",
      inclusion1: "Snorkeling",
      inclusion2: "Island Hopping",
    },
    {
      title: "Uttarakhand Wildlife Tour Package",
      inclusion1: "Safari",
      inclusion2: "Wildlife Guide",
    },
    {
      title: "Tamil Nadu Temple Tour Package",
      inclusion1: "Temple Visits",
      inclusion2: "Local Transport",
    },
    {
      title: "Sikkim Mountain Tour Package",
      inclusion1: "Mountain Climbing",
      inclusion2: "All Meals Included",
    },
    {
      title: "Punjab Heritage Tour Package",
      inclusion1: "Heritage Walk",
      inclusion2: "Traditional Meals",
    },
    {
      title: "Meghalaya Caves Tour Package",
      inclusion1: "Cave Exploration",
      inclusion2: "Safety Gear",
    },
    {
      title: "Ladakh Bike Tour Package",
      inclusion1: "Bike Rental",
      inclusion2: "Backup Vehicle",
    },
  ];
  return (
    <>
      <HomeBanner />
      <div className="home-container" id="home">
        <div className="row">
          <h2>featured tours</h2>
          <h1>the most favorite tour place</h1>
          <div className="tour-cards">
            {cardContents.map((content, index) => (
              <div className="card" key={index}>
                <div className="card-image">
                  <img src={cardImg} alt="card-image" />
                  <p>Featured ♥</p>
                </div>
                <div className="card-row">
                  <h1>{content.title}</h1>
                  <div className="card-details">
                    <h2>Package Inclusion</h2>
                    <p>
                      <span>↪</span> {content.inclusion1}
                    </p>
                    <p>
                      <span>↪</span> {content.inclusion2}
                    </p>
                    <p>₹3999</p>
                    <button>Enquire Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <About />
      <ChooseUs />
      <Footer />
      <StickyFooter />
    </>
  );
};

export default Home;
