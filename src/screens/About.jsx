import { React, useState } from "react";
import "./about.scss";
import { BsArrowRight } from "react-icons/bs";
import EnquiryForm from "../components/EnquiryForm";

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
          <div className="left">
            <h2>Reviews</h2>
            <h1>What Our Clients Say</h1>
          </div>
          <div className="right">
            <div className="reviews-container">
              <div className="review-card">
               
                <h2>Shubham Roy Choudhury</h2>
                <p>rated 4.2</p>
                <p>
                  It was an amazing experience visiting Rajasthan. We started
                  from Jaipur, then visited Jaisalmer where we spent a night
                  camping at the desert and then finally visited Jodhpur.
                </p>
              </div>
              <div className="review-card">
                <h2>Nitin S</h2>
                <p>rated 4.2</p>
                <p>
                  We had a great trip to Rajasthan and all thanks to Rajasthan
                  travel help line. We covered sight seeing at Jaipur, Jodhpur
                  and Udaipur with the respective guides who enlightened us
                  regarding the places we visited.
                </p>
              </div>
              <div className="review-card">
                <h2>archana b</h2>
                <p>rated 4.2</p>
                <p>
                  It was a pleasure travelling with Rajasthan travel Helpline.
                  Harsh Vardhan was very patient with multiple changes to our
                  itinerary. Must mention Mahaveer Singh our driver who was very
                  punctual and maintained the vehicle impeccably.
                </p>
              </div>
              <div className="review-card">
                
                <h2>naitik jain</h2>
                <p>rated 4.2</p>
                <p>
                  Awesome Experience. ThankYou Mr. Harsh Vardhan For planning
                  this beautiful Trip To Rajasthan. Our Driver Was Mr. Durga
                  Lal. He was very Friendly.Our 7 days trip covering
                  salasar,bikaner,jodhpur,jaipur.I Really Reccomend for this.
                </p>
              </div>
              <div className="review-card">
                
                <h2>Ramakrishna R</h2>
                <p>rated 4.2</p>
                <p>
                  Had a great in Rajasthan. It was an amazing destination for
                  family. It's a state, that can be called as all-in-one combo
                  thing as it comprises all the geographical variations. Sunil
                  Kumar our travel guide was very polite and welcoming. Helped
                  us to witness rajasthan to the fullest in a very short period
                  of time.
                </p>
              </div>
              <div className="review-card">
                
                <h2>Abhilasha Ojha</h2>
                <p>rated 4.2</p>
                <p>
                  I had a lovely experience travelling from Jaipur to Delhi by
                  road via Harshwardhan’s cab company. The car was brand new,
                  comfortable, and our service people — Sunil and Bhagwan Singh
                  were extremely polite and excellent behind the wheel —
                  trustworthy and professional. Do book your next visit by them.
                  Cheers.
                </p>
              </div>
              <div className="review-card">
                
                <h2>Juliet M</h2>
                <p>rated 4.2</p>
                <p>
                  Sunil Choudhary deserves a 5 star + rating , he has been all
                  that a tour driver should be ... Punctual, patient, calm,
                  polite, helpful and a cautious driver.
                </p>
              </div>
              <div className="review-card">
                
                <h2>Manan</h2>
                <p>rated 4.2</p>
                <p>
                  Had a fantastic time with Sunil Chaudhary as our driver. Would
                  highly recommend as he was very friendly, knowledgable and
                  kind!
                </p>
              </div>
            </div>
            <button onClick={handleShowForm}>
              Explore Now <BsArrowRight className="icon" />
            </button>
            {showEnquiryForm && <EnquiryForm handleClose={handleCloseForm} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
