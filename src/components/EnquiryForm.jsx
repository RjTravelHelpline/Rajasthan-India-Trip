import { useState } from "react";
import "./enquiry.scss";
import "sweetalert2/src/sweetalert2.scss";
import Swal from "sweetalert2";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    package: "",
    date: "",
    numberOfPersons: "",
    message: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false); // State for loader

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      validateForm(updatedData); // Validate form whenever input changes
      return updatedData;
    });
  };

  const validateForm = (data) => {
    const isValid =
      data.name &&
      data.email &&
      data.contact &&
      data.package &&
      data.date &&
      data.numberOfPersons &&
      data.message;
    setIsFormValid(isValid);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Start loader
    const formData = new FormData(event.target);

    formData.append("access_key", "ce28983c-47b8-4e3a-a8fe-44b1ba960c39");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
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
          title: "Thank you! Your Query has been submitted successfully",
          text: "For quick assistance, call or WhatsApp on +91-9024337038 (Mr. Harsh)",
          icon: "success",
          customClass: {
            popup: "alert-popup",
            title: "alert-title",
            text: "alert-txt",
            confirmButton: "alert-confirm",
          },
        });
        setFormData({
          name: "",
          email: "",
          contact: "",
          package: "",
          date: "",
          numberOfPersons: "",
          message: "",
        }); // Reset form
        setIsFormValid(false);
      } else {
        Swal.fire({
          title: "Oops!",
          text: "Something went wrong. Please try again later.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Unable to submit your query at the moment.",
        icon: "error",
      });
    } finally {
      setLoading(false); // Stop loader
    }
  };

  return (
    <div className="enquiry-container" id="enquiry">
      <div className="left">
        <h1>Get started from here!</h1>
        <p>
          Share your travel <span> plans </span> and <span> preferences</span> with us
        </p>
      </div>
      <div className="right">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="contact"
            placeholder="Contact"
            value={formData.contact}
            onChange={handleInputChange}
            required
          />
          <select
            name="package"
            value={formData.package}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Select Your Package
            </option>
            <option value="10 Days Best of Rajasthan Tour">10 Days Best of Rajasthan Tour</option>
            <option value="08 Days Rajasthan Budget Tour">08 Days Rajasthan Budget Tour</option>
            <option value="06 Days Scenic Rajasthan Tour">06 Days Scenic Rajasthan Tour</option>
            <option value="05 Days Romantic Rajasthan Tour">05 Days Romantic Rajasthan Tour</option>
            <option value="05 Days Golden Triangle Tour">05 Days Golden Triangle Tour</option>
            <option value="04 Days Rajasthan Wildlife Tour">04 Days Rajasthan Wildlife Tour</option>
            <option value="04 Days Jaipur - Jaisalmer Train Tour">04 Days Jaipur - Jaisalmer Train Tour</option>
            <option value="03 Days Udaipur Tour Package">03 Days Udaipur Tour Package</option>
            <option value="03 Days Jaisalmer Desert Tour">03 Days Jaisalmer Desert Tour</option>
            <option value="03 Days Jaipur Package Tour">03 Days Jaipur Package Tour</option>
          </select>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="numberOfPersons"
            placeholder="Number of Persons"
            value={formData.numberOfPersons}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <button
            type="submit"
            disabled={!isFormValid || loading}
            className={`submit-button ${!isFormValid || loading ? "disabled" : ""}`}
          >
            {loading ? "Submitting..." : "Enquire Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
