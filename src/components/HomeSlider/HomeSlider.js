import React from 'react'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./HomeSlider.css"

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import forescout from "../../assets/images/forescout.png"
import endu from "../../assets/images/endu.jpg.webp"
import cysiv from '../../assets/images/cysiv.jpg.webp'
import krista from '../../assets/images/Krista-logo-transparent-312-128-2_b63870c5-8e05-4078-b7db-986a926de2ab.png'
import symantec from '../../assets/images/symantec.jpg.webp'
import forescout from '../../assets/images/forescout.png' 

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const testimonial = [
  {
    id: "1",
    name: "John Doe",
    image:forescout,
    text: "Lorem Ipsum has been the industry's st took a galley of type and scrambled it to make a type specimen book. It has survived not onl five centuries, but also the leap into electronic typesetting.",
  },
  {
    id: "2",
    name: "John Doe",
    image: endu,
    text: "Lorem Ipsum has been the industry's st took a galley of type and scrambled it to make a type specimen book. It has survived not onl five centuries, but also the leap into electronic typesetting.",
  },
  {
    id: "3",
    name: "John Doe",
    image: symantec,
    text: "Lorem Ipsum has been the industry's st took a galley of type and scrambled it to make a type specimen book. It has survived not onl five centuries, but also the leap into electronic typesetting.",
  },
  {
    id: "4",
    name: "John Doe",
    image: cysiv,
    text: "Lorem Ipsum has been the industry's st took a galley of type and scrambled it to make a type specimen book. It has survived not onl five centuries, but also the leap into electronic typesetting.",
  },
  {
    image: krista,
    text: "Lorem Ipsum has been the industry's st took a galley of type and scrambled it to make a type specimen book. It has survived not onl five centuries, but also the leap into electronic typesetting.",
  }
]
const HomeSlider = () => {
  const pagination = {
    clickable: true,
  };
  return (
    <div>
      <div className='ourhappyclient'>
      <h2 style={{ textAlign: "center",padding:"2rem 0" }}>
        Our Happy Clients
      </h2>
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
        {
          testimonial.map((i) => {
            return (
              <>
                <SwiperSlide>
                    <div className='inner-testimonial-image'>
                      <img src={i.image} alt='a' />
                    </div>
                    

                </SwiperSlide>
              </>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default HomeSlider
