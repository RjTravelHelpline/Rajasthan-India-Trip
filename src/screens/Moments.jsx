import React from "react";
import "./moment.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const Moments = () => {
  return (
    <>
      <div className="moments-container">
        <div className="row">
          <h2>Memorable Moments</h2>
          <h1>See How Our Guests Enjoyed Their Adventures</h1>
          <div className="moments-gallery">
            <Swiper
              className="swiper"
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
            >
              <SwiperSlide className="swiper-slider">
                <img
                  src="/WhatsAppImage4.jpeg"
                  alt="Moments Images"
                  title="Moment3"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slider">
                <img
                  src="/WhatsAppImage6.jpeg"
                  alt="Moments Images"
                  title="Moment5"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slider">
                <img
                  src="/WhatsAppImage5.jpeg"
                  alt="Moments Images"
                  title="Moment4"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slider">
                <img
                  src="/WhatsAppImage3.jpeg"
                  alt="Moments Images"
                  title="Moment2"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slider">
                <img
                  src="/WhatsAppImage7.jpeg"
                  alt="Moments Images"
                  title="Moment6"
                />
              </SwiperSlide>

              <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow">
                  <AiOutlineLeft className="icon" />
                </div>
                <div className="swiper-button-next slider-arrow">
                  <AiOutlineRight className="icon" />
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Moments;
