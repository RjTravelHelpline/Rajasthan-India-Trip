import React, { useState, useEffect } from "react";
import "./enquiry.scss";
import { MdClear } from "react-icons/md";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const EnquiryForm = ({ handleClose }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ce28983c-47b8-4e3a-a8fe-44b1ba960c39");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Thankyou! Your Query has been submitted successfully",
        text: "For quick assistance, call or whatsapp on +91-9024337038 (Mr. Harsh)",
        icon: "success",
        customClass: {
          popup: "alert-popup",
          title: "alert-title",
          text: "alert-txt",
          confirmButton: "alert-confirm",
        },
      });

      // setIsVisible(false);
    }
  };

  // const [isVisible, setIsVisible] = useState(true);

  // const closeForm = () => {
  //   setIsVisible(false);
  //   handleClose();
  // };

  // useEffect(() => {
  //   if (!isVisible) {
  //     handleClose();
  //   }
  // }, [isVisible, handleClose]);
  return (
    <>
      {/* {isVisible && ( */}
      <div className="enquiry-container" id="enquiry">
        <div className="left">
          <h1>Get started from here!</h1>
          <p>
            Share your travel <span> plans </span>
            and <span> preferences</span> with us
          </p>
        </div>
        <div className="right">
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input
              type="number"
              name="contact"
              placeholder="Contact"
              required
            />
            <input type="date" name="date" placeholder="Date" required />
            <input
              type="number"
              name="number of persons"
              placeholder="Number of Person"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit">Enquire Now</button>
          </form>
        </div>
        {/* <MdClear className="cross-icon" onClick={closeForm} /> */}
      </div>
      {/* )} */}
    </>
  );
};

export default EnquiryForm;
