import "./footer.scss";
import { Link } from "react-router-dom";
import WhatsAppIcon from "./bottomSocials";
import { RiFacebookFill, RiInstagramFill, RiMailFill } from "react-icons/ri";

const Footer = () => {
  const date = new Date()
  const mydate = date.getFullYear()
  return (
    <>
      {/* <div className="container"> */}
      <WhatsAppIcon />
      <div className="footer-container" id="contact">
        <div className="row container">
          <div className="footer-card">
            <h2>About Us</h2>
            <p>
              Rajasthan is one of India&apos;s leading tourist places, boasting
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
              <a href="https://www.tourism.rajasthan.gov.in/" target="_blank">
                <img src="/rth-approved-logo.jpg" alt="RTH-Logo" />
              </a>
              <a href="https://frto.org/" target="_blank" >
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
                <RiFacebookFill className="icon" />
              </a>
              <a href="https://www.instagram.com/rajasthantravelhelpline/" target="_blank">
                <RiInstagramFill className="icon" />
              </a>
              <a href="mailto:mail@rajasthantravelhelpline.com" target="_blank">
                <RiMailFill className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <p>© {mydate} <span>RajasthanTravelHelpline</span> | All Rights Reserverd.</p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Footer;
