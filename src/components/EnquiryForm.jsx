import React, { useState } from "react";
import "./enquiry.scss";
import { MdClear } from "react-icons/md";

const EnquiryForm = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="enquiry-container">
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="number" placeholder="Contact" required />
            <hr />
            <h2>Tour Details</h2>
            <input type="date" required />
            <input type="text" placeholder="Tour/destination/place" required />
            <button>Enquire Now</button>
          </form>
          <MdClear className="cross-icon" onClick={handleClose} />
        </div>
      )}
    </>
  );
};

export default EnquiryForm;
