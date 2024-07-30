import React, { useState, useEffect } from "react";
import "./enquiry.scss";
import { MdClear } from "react-icons/md";

const EnquiryForm = ({ handleClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const closeForm = () => {
    setIsVisible(false);
    handleClose();
  };

  useEffect(() => {
    if (!isVisible) {
      handleClose();
    }
  }, [isVisible, handleClose]);
  return (
    <>
      {isVisible && (
        <div className="enquiry-container">
          <form method="POST" action="https://formsubmit.co/mail@rajasthantravelhelpline.com">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="number" name="contact" placeholder="Contact" required />
            <hr />
            <h2>Tour Details</h2>
            <input type="date" name="date" required />
            <input type="number" name="number of persons" placeholder="Number of Person" required />
            <button type="submit">Enquire Now</button>
          </form>
          <MdClear className="cross-icon" onClick={closeForm} />
        </div>
      )}
    </>
  );
};

export default EnquiryForm;
