import {React, useEffect}from "react";
import "./privacy.scss";
import { Link} from "react-router-dom";

const Privacy = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <div className="privacy-container">
        <div className="row">
        <button><Link to='/'>Go Back →</Link></button>
          <h2>Privacy Policy</h2>
          <h1>How We Use Your Information</h1>
          <div className="privacy-details">
            <p>
              Welcome to the Rajasthan Travel Helpline! Your privacy is of
              utmost importance to us. This privacy policy outlines how we
              collect, use, and protect your personal information when you visit
              our website and use our services. You agree to our website's terms
              outlined in this privacy policy.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              We collect personal information you provide us when you use our
              services, including your name, email address, phone number, and
              payment details. We also collect non-personal information such as
              your IP address, browser type, and operating system.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>The information we collect is used to:</p>
            <ul>
              <li>Process and confirm your bookings</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Improve our website and services</li>
              <li>
                Send you updates, promotions, and marketing communications (if
                you opt in)
              </li>
              <li>Comply with legal obligations and prevent fraud</li>
            </ul>

            <h2>3. Data Security</h2>
            <p>
              We implement strict security measures to protect your personal
              information from unauthorized access, alteration, disclosure, or
              destruction. Our secure payment gateway ensures that your payment
              details are processed safely.
            </p>

            <h2>4. Cookies and Tracking Technologies</h2>
            <p>
              Rajasthan Travel Helpline uses cookies and similar tracking
              technologies to enhance your browsing experience and gather
              information about how you use our website. You can turn off
              cookies through your browser settings, but this may affect the
              functionality of our website.
            </p>

            <h2>5. Sharing Your Information</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to outside parties except as necessary to provide
              services, comply with the law, or protect our rights. This
              includes sharing information with trusted third-party service
              providers who assist us in operating our website and conducting
              our business.
            </p>

            <h2>6. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these
              websites. We encourage you to read their privacy policies before
              providing any personal information.
            </p>

            <h2>7. Changes to This Privacy Policy</h2>
            <p>
              Rajasthan Travel Helpline reserves the right to update this
              privacy policy anytime. We will notify you of any changes by
              posting the revised policy on our website. Your continued use of
              our services after any modifications indicates your acceptance of
              the new terms.
            </p>

            <h2>8. Contact Us</h2>
            <p>
              If you have any questions or concerns about this privacy policy,
              please get in touch with us at{" "}
              <a href="mailto:mail@rajasthantravelhelpline.com">
                mail@rajasthantravelhelpline.com
              </a>
              .
            </p>

            <p>
              Thank you for trusting the Rajasthan Travel Helpline to help you
              with your travel needs. Your privacy and security are our
              priority.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
