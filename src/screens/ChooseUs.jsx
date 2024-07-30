import {React, useState} from "react";
import "./choose.scss";
import homeImage from "/home-img.jpg";
import { BsBoxFill } from "react-icons/bs";
import { BiSolidConfused } from "react-icons/bi";
import EnquiryForm from "../components/EnquiryForm";

const ChooseUs = () => {
   // enquiry form
   const [showEnquiryForm, setShowEnquiryForm] = useState(false);

   const handleShowForm = () => {
     setShowEnquiryForm(true);
   };
   const handleCloseForm = () => {
     setShowEnquiryForm(false);
   };
  return (
    <>
      <div className="chooseus-container" id="whychooseus">
        <div className="row">
          <div className="right">
            <h2>Why Book with us?</h2>
            <h1>Some Good Reasons to Know</h1>

            <div className="details">
              <div className="detail-card">
                <div className="card-details">
                  <h2>Best Travel Experts 🚇</h2>
                </div>
              </div>
              <div className="detail-card">
                <div className="card-details">
                  <h2>10+ Years of Experience 🚀</h2>
                </div>
              </div>
              <div className="detail-card">
                <div className="card-details">
                  <h2>Awesome Google Reviews 🌟</h2>
                </div>
              </div>
              <div className="detail-card">
                <div className="card-details">
                  <h2>24 X 7 On-Trip Assistance 👋</h2>
                </div>
              </div>
              <div className="detail-card">
                <div className="card-details">
                  <h2>Best Price Guaranteed 💰</h2>
                </div>
              </div>
              <div className="detail-card">
                <div className="card-details">
                  <h2>Seamless Booking Experience 🎫</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="leftcon">
            <div className="icon-container">
              <BiSolidConfused className="icon" />
            </div>
          </div>
          <div className="rightcon">
            <h1>Are you still confused?</h1>
            <h2>Book your Trip with Rajasthan Tour Expert.</h2>
            <div className="button-container">
              <button onClick={handleShowForm}>Let us know your requirements →</button>
              {showEnquiryForm && <EnquiryForm handleClose={handleCloseForm}/>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
