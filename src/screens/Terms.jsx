import React from "react";
import "./terms.scss";
import { useNavigate } from "react-router-dom";

const Terms = () => {
    const navigate = useNavigate()
  return (
    <>
      <div className="terms-container">
        <div className="row">
            <button onClick={()=> {navigate('/')}}>Go Back →</button>
          <h2>Terms and Conditions</h2>
          <h1>Introduction and Acceptance of Terms</h1>
          <div className="terms-details">
            <p>
              Welcome to the Rajasthan Travel Helpline! By accessing or using
              our website, you agree to comply with and be bound by the
              following terms and conditions. Please read them carefully before
              using our services.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              Using the Rajasthan Travel Helpline, you acknowledge that you have
              read, understood, and agree to be bound by these terms and
              conditions. Please do not use our website or services if you
              disagree with these terms.
            </p>

            <h2>2. Services Offered</h2>
            <p>
              Rajasthan Travel Helpline is committed to providing accurate and
              up-to-date travel information, booking assistance, and support
              services throughout Rajasthan. We strive to keep you
              well-informed, but please note that we reserve the right to modify
              or discontinue our services without prior notice.
            </p>

            <h2>3. Booking and Payments</h2>
            <p>
              All bookings made through Rajasthan Travel Helpline are subject to
              availability and confirmation. Rest assured, our online payment
              gateway is secure and we accept major credit cards and other
              approved methods of payment. Full payment is required at the time
              of booking unless otherwise stated.
            </p>

            <h2>4. Cancellation and Refund Policy</h2>
            <p>
              Cancellations made 48 hours before the scheduled travel date are
              eligible for a refund. We understand the importance of timely
              refunds, and we aim to process them within 7-10 business days.
              Cancellations made within 48 hours of the planned travel date may
              not qualify for a refund.
            </p>

            <h2>5. User Conduct</h2>
            <p>
              You agree to use our services for lawful purposes only. You must
              not use our website or services in any way that causes damage or
              harm to our business, website, or any other user.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              Rajasthan Travel Helpline will not be liable for any indirect,
              incidental, or consequential damages arising out of or in
              connection with the use of our services. Our total liability to
              you for any damages shall not exceed the amount you paid for the
              service in question.
            </p>

            <h2>7. Changes to Terms and Conditions</h2>
            <p>
              We reserve the right to change these terms and conditions at any
              time. Your continued use of our services after any changes
              indicates your acceptance of the new terms.
            </p>

            <h2>8. Contact Us</h2>
            <p>
              If you have any questions or concerns about these terms and
              conditions, please get in touch with us at{" "}
              <a href="mailto:mail@rajasthantravelhelpline.com">
                mail@rajasthantravelhelpline.com
              </a>
              .
            </p>

            <p>Thank you for choosing the Rajasthan Travel Helpline.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
