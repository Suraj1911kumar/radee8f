import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./HomeSlider.css";

import comma from "../../assets/images/Coomas.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import endu from "../../assets/images/endu.png";
import cysiv from "../../assets/images/cysiv.png";
import krista from "../../assets/images/krista.png";
import symantec from "../../assets/images/symantec.png";
import forescout from "../../assets/images/forescoutp.png";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const testimonial = [
  {
    id: 1,
    name: "CYSIV",
    image: forescout,
    text: "We found Radee8 as a strategic partner that provides a mature, high performing and high compliance approach that enables your firm to establish and compete for talent when entering a dynamic market like India.",
    link: "/testimonal",
  },
];
const Testimonal = () => {
  const navigate = useNavigate();
  const scroll_to_Top = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };
  const pagination = {
    clickable: true,
  };
  return (
    <div>
      <div className="ourhappyclient">
        <h2 style={{ textAlign: "center", padding: "2rem 0" }}>Testimonials</h2>
        {/* <h4 className="" style={{textTransform:"uppercase"}} > */}
        {/* <NavLink to='/testimonal'>
          <span onClick={scroll_to_Top}>Testimonials</span>
          </NavLink> */}
        {/* </h4> */}
        <div className="cline"></div>
      </div>

      <Swiper
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        pagination={pagination}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {testimonial.map((i, index) => {
          return (
            <>
              <SwiperSlide key={index}>
                <Link to={i.link} onClick={scroll_to_Top}>
                  <div className="testimonial-side column ">
                    <div className="testimonial-inner">
                      <div className="testimonial-text">
                        <p>{i.text}</p>
                      </div>
                      <div className="testimonal-profile row">
                        <div className="profile-text">
                          <span>
                            <img
                              src={cysiv}
                              alt="no found"
                              style={{
                                width: 150,
                                objectFit: "contain",
                              }}
                            />
                          </span>
                        </div>
                        <div>
                          <img src={comma} className="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>

      {/* <div
        style={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <h3 style={{ textAlign: "center" }}>Testimonials</h3>
        <marquee>
          <p style={{ color: "var(--green)" }}>
            "we found Radee8 as a strategic partner that provides a mature, high
            performing and high compliance approach that enables your firm to
            establish and compete for talent when entering a dynamic
            market like India"
          </p>
        </marquee>
        <span style={{ textAlign: "end" }}>
          - Keith Foster, Chief People Officer @ CYSIV
        </span>
      </div> */}
    </div>
  );
};

export default Testimonal;
