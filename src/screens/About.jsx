import React, { useState } from "react";
import "./about.scss";
import { BsArrowRight } from "react-icons/bs";
import EnquiryForm from "../components/EnquiryForm";

const reviews = [
  {
    name: "Shubham Roy Choudhury",
    text: "It was an amazing experience visiting Rajasthan. We started from Jaipur, then visited Jaisalmer where we spent a night camping at the desert and then finally visited Jodhpur.",
  },
  {
    name: "Nitin S",
    text: "We had a great trip to Rajasthan and all thanks to Rajasthan travel help line. We covered sight seeing at Jaipur, Jodhpur and Udaipur with the respective guides who enlightened us regarding the places we visited.",
  },
  {
    name: "Archana B",
    text: "It was a pleasure travelling with Rajasthan travel Helpline. Harsh Vardhan was very patient with multiple changes to our itinerary.",
  },
  {
    name: "Naitik Jain",
    text: "Awesome Experience. Thank You Mr. Harsh Vardhan For planning this beautiful Trip To Rajasthan. Our Driver Was Mr. Durga Lal. He was very Friendly.",
  },
  {
    name: "Ramakrishna R",
    text: "Had a great in Rajasthan. It was an amazing destination for family. It's a state, that can be called as all-in-one combo thing as it comprises all the geographical variations.",
  },
  {
    name: "Abhilasha Ojha",
    text: "I had a lovely experience travelling from Jaipur to Delhi by road via Harshwardhan’s cab company. The car was brand new, comfortable, and our service people — Sunil and Bhagwan Singh were extremely polite and excellent.",
  },
  {
    name: "Juliet M",
    text: "Sunil Choudhary deserves a 5 star + rating , he has been all that a tour driver should be ... Punctual, patient, calm, polite, helpful and a cautious driver.",
  },
  {
    name: "Manan",
    text: "Had a fantastic time with Sunil Chaudhary as our driver. Would highly recommend as he was very friendly, knowledgeable and kind!",
  },
];

const About = () => {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  const handleShowForm = () => {
    setShowEnquiryForm(true);
  };

  const handleCloseForm = () => {
    setShowEnquiryForm(false);
  };

  return (
    <>
      <div className="about-container" id="reviews">
        <div className="row">
          <div className="head">
            <h2>Reviews</h2>
            <h1>What Our Clients Say</h1>
          </div>
          <div className="reviews-container">
            {reviews.map((review, index) => (
              <div className="review-card" key={index}>
                <h2>{review.name}</h2>

                <div className="rates">
                  <img src="/rate.png" alt="rate star" title="Star Rating" />
                  <img src="/rate.png" alt="rate star" title="Star Rating" />
                  <img src="/rate.png" alt="rate star" title="Star Rating" />
                  <img src="/rate.png" alt="rate star" title="Star Rating" />
                  <img src="/rate.png" alt="rate star" title="Star Rating" />
                </div>
                <p>{review.text}</p>
              </div>
            ))}

            {/* </Swiper> */}
          </div>

          
          <div className="w-100 trip-advisor-container">
          <a href="#enquiry">
            <button>
              Explore Now
              <BsArrowRight className="icon" />
            </button>
          </a>
            <a href="https://www.tripadvisor.in/Attraction_Review-g304555-d24123312-Reviews-Rajasthan_Travel_Helpline-Jaipur_Jaipur_District_Rajasthan.html">
              <div className="image-container">
                <img src="tripadvisor-logo.webp" alt="trip advisor" />
              </div>
            </a>
          </div>
          {/* {showEnquiryForm && <EnquiryForm handleClose={handleCloseForm} />} */}
        </div>
      </div>
    </>
  );
};

export default About;
