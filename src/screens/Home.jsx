import { React, useState, memo } from "react";
import "./home.scss";
import Footer from "../components/Footer";
import StickyFooter from "../components/Sticky-footer";
import ChooseUs from "./ChooseUs";
import About from "./About";
import HomeBanner from "./HomeBanner";
import { GoHomeFill } from "react-icons/go";
import { GiHotMeal } from "react-icons/gi";
import { FaHotel } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import Moments from "./Moments";
import { SiWhatsapp } from "react-icons/si";
import { CiPhone } from "react-icons/ci";
import EnquiryForm from "../components/EnquiryForm";

const Home = () => {
  const [expandedCards, setExpandedCards] = useState({});
  const MemoizedEnquiryForm = memo(EnquiryForm);

  const toggleReadMore = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  const cardContents = [
    {
      title: "10 Days Best of Rajasthan Tour",
      coveredPlaces: "09 Nights / 10 Days",
      image: "/jaipur.jpg",
      PlacesCovered:
        "Jaipur > Ranthambore > Chittorgarh > Udaipur > Kumbhalgarh > Jodhpur > Jaisalmer > Thar Desert > Bikaner > Jaipur",
      inclusions: [
        "Air-Condition Accommodation",
        "Welcome Drink on Arrival",
        "Morning Tea",
        "Daily Breakfast & Dinner",
        "Exclusive Air-Conditioned Vehicle",
        "Highway Tolls, Parkings & Driver Allowance",
        "Local Guide Services during Sightseeing",
        "Packaged Drinking Water Bottles during Travel",
        "01 Jungle Safari by Canter.",
        "Hi-Tea with Bonfire & Cultural Programs at Desert Camp.",
        "Camel Ride over Sand Dunes.",
        "Farewell Gift on Departure.",
        "Child below 5 years is complimentary (without extra bed & seat)",
      ],
      price: "26300/-",
    },
    {
      title: "08 Days Rajasthan Budget Tour",
      coveredPlaces: "07 Nights / 08 Days",
      image: "/jaipur-pushkar.jpg",
      PlacesCovered:
        "Jaipur > Pushkar > Chittorgarh > Udaipur > Kumbhalgarh > Jodhpur > Jaisalmer > Thar Desert",
      inclusions: [
        "Air-Condition Accommodation",
        "Welcome Drink on Arrival",
        "Morning Tea",
        "Daily Breakfast & Dinner",
        "Exclusive Air-Conditioned Vehicle",
        "Highway Tolls, Parkings & Driver Allowance",
        "Local Guide Services during Sightseeing",
        "Packaged Drinking Water Bottles during Travel",
        "Hi-Tea with Bonfire & Cultural Programs at Desert Camp.",
        "Camel Ride over Sand Dunes.",
        "Farewell Gift on Departure.",
        "Child below 5 years is complimentary (without extra bed & seat).",
        "All Taxes",
      ],
      price: "19999/-",
    },
    {
      title: "06 Days Scenic Rajasthan Tour",
      coveredPlaces: "05 Nights / 06 Days",
      image: "/jaipur-kumbhalgarh.webp",
      PlacesCovered:
        "Udaipur > Kumbhalgarh > Ranakpur > Jodhpur > Jaisalmer > Thar Desert > Indo-Pak Border",
      inclusions: [
        "Air-Condition Accommodation",
        "Welcome Drink on Arrival",
        "Morning Tea",
        "Daily Breakfast & Dinner",
        "Exclusive Air-Conditioned Vehicle",
        "Highway Tolls, Parkings & Driver Allowance",
        "Local Guide Services during Sightseeing",
        "Packaged Drinking Water Bottles during Travel",
        "Hi-Tea with Bonfire & Cultural Programs at Desert Camp.",
        "Camel Ride over Sand Dunes.",
        "Farewell Gift on Departure.",
        "Child below 5 years is complimentary (without extra bed & seat).",
        "All Taxes",
      ],
      price: "14999/-",
    },
    {
      title: "05 Days Romantic Rajasthan Tour",
      coveredPlaces: "04 Nights / 05 Days",
      image: "/jaipur-kishangarh.webp",
      PlacesCovered:
        "Jaipur > Marble Dumping Yard > Pushkar > Chittorgarh > Udaipur",
      inclusions: [
        "Air-Condition Accommodation",
        "Welcome Drink on Arrival",
        "Morning Tea",
        "Daily Breakfast & Dinner",
        "Exclusive Air-Conditioned Vehicle",
        "Highway Tolls, Parkings & Driver Allowance",
        "Local Guide Services during Sightseeing",
        "Packaged Drinking Water Bottles during Travel",
        "Farewell Gift on Departure.",
        "Child below 5 years is complimentary (without extra bed & seat).",
        "All Taxes",
      ],
      price: "13799/-",
    },
    {
      title: "05 Days Golden Triangle Tour",
      coveredPlaces: "04 Nights / 05 Days",
      image: "/jaipur-agra.jpg",
      PlacesCovered: "Delhi > Agra > Fatehpur Sikri > Abhaneri > Jaipur ",
      inclusions: [
        "Air-Condition Accommodation",
        "Welcome Drink on Arrival",
        "Morning Tea",
        "Daily Breakfast & Dinner",
        "Exclusive Air-Conditioned Vehicle",
        "Highway Tolls, Parkings & Driver Allowance",
        "Local Guide Services during Sightseeing",
        "Packaged Drinking Water Bottles during Travel",
        "Farewell Gift on Departure.",
        "Child below 5 years is complimentary (without extra bed & seat).",
        "All Taxes",
      ],
      price: "12899/-",
    },
    {
      title: "04 Days Rajasthan Wildlife Tour",
      coveredPlaces: "03 Nights / 04 Days",
      image: "/jaipur-jhalana.webp",
      PlacesCovered:
        "Jaipur > Jhalana Leopard Safari > Abhaneri > Ranthambhore Tiger Reserve",
      inclusions: [
        "Air-Condition Accommodation",
        "Welcome Drink on Arrival",
        "Morning Tea",
        "Daily Breakfast & Dinner",
        "Exclusive Air-Conditioned Vehicle",
        "Highway Tolls, Parkings & Driver Allowance",
        "01 Jungle Safari by Gypsy (Jhalana Leopard Reserve)",
        "01 Jungle Safari by Canter (Ranthambore Tiger Reserve)",
        "Local Guide Services during Jaipur Sightseeing",
        "Packaged Drinking Water Bottles during travel",
        "Farewell Gift on Departure.",
        "Child below 5 years is complimentary (without extra bed & seat).",
        "All Taxes",
      ],
      price: "12599/-",
    },
    {
      title: "04 Days Jaipur - Jaisalmer Train Tour",
      coveredPlaces: "03 Nights / 04 Days",
      image: "/jaipur-jaisalmer.jpg",
      PlacesCovered: "Jaipur > Jaisalmer > Thar Desert",
      inclusions: [
        "Air-Condition Accommodation",
        "Welcome Drink on Arrival",
        "Morning Tea",
        "Daily Breakfast & Dinner",
        "Jaipur to Jaisalmer Train Ticket",
        "Exclusive Air-Conditioned Vehicle",
        "Parkings & Driver Allowance",
        "Hi-Tea with Bonfire & Cultural Programs at Desert Camp.",
        "Camel Ride over Sand Dunes.",
        "Local Guide Services during Sightseeing",
        "Farewell Gift on Departure.",
        "Child below 5 years is complimentary.",
        "All Taxes",
      ],
      price: "9499/-",
    },
    {
      title: "03 Days Udaipur Tour Package",
      coveredPlaces: "02 Nights / 03 Days",
      image: "/jaipur-chittor.webp",
      PlacesCovered: "Udaipur > Chittorgarh",
      inclusions: [
        "Air-Condition Accommodation",
        "Welcome Drink on Arrival",
        "Morning Tea",
        "Daily Breakfast & Dinner",
        "Exclusive Air-Conditioned Vehicle",
        "Highway Tolls, Parkings & Driver Allowance",
        "Parkings & Driver Allowance",
        "Local Guide Services during Sightseeing",
        "Packaged Drinking Water Bottles during Travel.",
        "Farewell Gift on Departure.",
        "Child below 5 years is complimentary.",
        "All Taxes",
      ],
      price: "6499/-",
    },
    {
      title: "03 Days Jaisalmer Desert Tour",
      coveredPlaces: "02 Nights / 03 Days",
      image: "/jaipur-jaisalmer.jpg",
      PlacesCovered: "Jaisalmer > Thar Desert > Indo-Pak Border",
      inclusions: [
        "Air-Condition Accommodation",
        "Welcome Drink on Arrival",
        "Morning Tea",
        "Daily Breakfast & Dinner",
        "Exclusive Air-Conditioned Vehicle",
        "Highway Tolls, Parkings & Driver Allowance",
        "Local Guide Services during Sightseeing",
        "Packaged Drinking Water Bottles during Travel",
        "Hi-Tea with Bonfire & Cultural Programs at Desert Camp.",
        "Camel Ride over Sand Dunes.",
        "Farewell Gift on Departure.",
        "Child below 5 years is complimentary (without extra bed & seat).",
        "All Taxes",
      ],
      price: "6499/-",
    },
    {
      title: "03 Days Jaipur Package Tour",
      coveredPlaces: "02 Nights / 03 Days",
      image: "/jaipur-jaipur.webp",
      PlacesCovered: "Jaipur",
      inclusions: [
        "Welcome Drink on Arrival",
        "Morning Tea",
        "Daily Breakfast & Dinner",
        "01 Jungle Ride by Gypsy (Jhalana Leopard Reserve)",
        "Exclusive Air-Conditioned Vehicle",
        "Parkings & Driver Allowance",
        "Local Guide Services during Sightseeing",
        "Packaged Drinking Water Bottles during Travel",
        "Farewell Gift on Departure",
        "Child below 5 years is complimentary",
        "All Taxes",
      ],
      price: "7199/-",
    },
  ];
  const generateWhatsAppLink = (card) => {
    const message = `Hello, I would like to know more about ${card.title} Package`;
    return `https://api.whatsapp.com/send?phone=919024337038&text=${encodeURIComponent(
      message
    )}`;
  };

  // const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  // const handleShowForm = (card) => {
  //   setShowEnquiryForm(true);
  // };

  // const handleCloseForm = () => {
  //   setShowEnquiryForm(false);
  // };

  return (
    <>
      {/* {showEnquiryForm && <MemoizedEnquiryForm handleClose={handleCloseForm} />} */}
      <HomeBanner />
      <div className="home-container" id="packages">
        <div className="row">
          <h2>featured tours</h2>
          <h1>best selling tour packages</h1>
          <div className="tour-cards">
            {cardContents.map((content, index) => (
              <div className="card" key={index}>
                <div className="card-image">
                  <img
                    src={content.image}
                    alt="Package-image"
                    title={`${content.title}`}
                  />
                  <p>Featured ♥</p>
                  <div className="card-icons">
                    <GiHotMeal className="icon" />
                    <FaCar className="icon" />
                    <FaHotel className="icon" />
                    <GoHomeFill className="icon" />
                  </div>
                </div>
                <div className="card-row">
                  <p>{content.coveredPlaces}</p>
                  <h1>{content.title}</h1>
                  <p>{content.PlacesCovered}</p>
                  <div className="card-details">
                    <h2>Package Inclusion</h2>
                    {content.inclusions
                      .slice(
                        0,
                        expandedCards[index] ? content.inclusions.length : 2
                      )
                      .map((inclusion, idx) => (
                        <p key={idx}>
                          <span>↪</span> {inclusion}
                        </p>
                      ))}
                    <div className="read-more-container">
                      {content.inclusions.length > 2 && (
                        <button
                          className="read-more"
                          onClick={() => toggleReadMore(index)}
                        >
                          {expandedCards[index] ? "Read Less" : "Read More"}
                        </button>
                      )}
                    </div>

                    <p className="price">₹{content.price}</p>
                    <div className="buttons">
                      <a href="#enquiry">
                        <button>Enquire Now</button>
                      </a>
                      <div className="social-buttons">
                        <button>
                          <a
                            href={generateWhatsAppLink(content)}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <SiWhatsapp className="icon" />
                          </a>
                        </button>
                        <button>
                          <a href="tel:+91-9024337038" target="_blank">
                            <CiPhone className="icon" />
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Moments />
      <About />
      <ChooseUs />
      <EnquiryForm />
      <StickyFooter />
    </>
  );
};

export default Home;
