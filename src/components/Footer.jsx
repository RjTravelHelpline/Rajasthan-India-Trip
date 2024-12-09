import "./footer.scss";
import { CiFacebook } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { Link } from "react-router-dom";
import WhatsAppIcon from "./bottomSocials";

const Footer = () => {
  const date = new Date()
  const mydate = date.getFullYear()
  return (
    <>
      <WhatsAppIcon />
      <div className="footer-container" id="contact">
        <div className="row">
          <div className="footer-card">
            <h2>About Us</h2>
            <p>
              Rajasthan is one of India's leading tourist places, boasting
              magnificent forts and glorious royal palaces, which reverberate
              the sages of victory. Mouthwatering dishes, colorful culture,
              exquisite handicrafts, and architectural wonders are regarded as a
              few of the reasons why people love to choose our{" "}
              Rajasthan tour packages.
            </p>
            <div className="row"><Link to="/privacy-policy" className="pages">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="pages">Terms & Conditions</Link></div>

          </div>
          <div className="footer-card">
            <h2>Approved by</h2>
            <div className="logo-container">
              <a href="https://www.tourism.rajasthan.gov.in/">
                <img src="/rth-approved-logo.jpg" alt="RTH-Logo" />
              </a>
              <a href="https://frto.org/">
                <img src="/frto-logo.webp" alt="FRTO-Logo" />
              </a>

            </div>
          </div>
          <div className="footer-card">
            <h2>Contact Us</h2>
            <img src="/rth-logo.png" alt="RTH-Logo" />
            <p>Rajasthan Travel Helpline</p>
            <p>
              G-18, City Plaza, Jhotwara road, Bani park, Jaipur-16
              Rajasthan(India)
            </p>
            <a href="tel:9024337038" target="_blank">

              <p>📞+91-9024337038</p>
            </a>
            <a href="tel:8107191919" target="_blank">

              <p>📞+91-8107191919</p>
            </a>
            <div className="social-icons">
              <a href="https://www.facebook.com/rajasthantravelhelpline/" target="_blank">
                <CiFacebook className="icon" />
              </a>
              <a href="https://www.instagram.com/rajasthantravelhelpline/" target="_blank">
                <CiInstagram className="icon" />
              </a>
              <a href="mailto:mail@rajasthantravelhelpline.com" target="_blank">
                <CiMail className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <p>copyright @ {mydate} <span>RajasthanTravelHelpline</span> | All Rights Reserverd.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
