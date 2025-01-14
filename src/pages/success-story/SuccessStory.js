import React, { useEffect, useState } from "react";
import "./SuccessStory.css";
import "../../components/HomeSlider/HomeSlider.css";
// import symantic from "../../assets/images/symantec.jpg.webp";
import endu from "../../assets/images/endu.jpg.webp";
import cysiv from "../../assets/images/cysiv.jpg.webp";
import krista from "../../assets/images/Krista-logo-transparent-312-128-2_b63870c5-8e05-4078-b7db-986a926de2ab.png";
import symantec from "../../assets/images/symantec.jpg.webp";
import forescout from "../../assets/images/forescout.png";
// slider
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
const testimonial = [
  {
    id: "1",
    image: forescout,
  },
  {
    id: "2",
    image: endu,
  },
  {
    id: "3",
    image: symantec,
  },
  {
    id: "4",
    image: cysiv,
  },
  {
    id: "5",
    image: krista,
  },
];
const SuccessStory = () => {
  // const [togle, setToggle] = useState(true);
  const [change, setChange] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", toggleChange);
  }, []);
  const toggleChange = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setChange(true);
    } else if (scrolled > 600) {
      setChange(false);
    }
  };
  const pagination = {
    clickable: true,
  };
  return (
    <div className="success-story">
      <div className="SuccessStoryheader">
        <h2  style={{textTransform:"uppercase"}}>Success Stories</h2>
        <p>
          RADEE8 prides itself on being one of the most client-centric
          companies. Over the years, we have helped a lot of businesses achieve
          their full potential through our collaboration and consultancy. We
          would love to share some of our success stories, and we look forward
          to helping you in your transformative journey.
        </p>
      </div>

      <div className="successStoryBody">
        <div className=" successStoryContent">
          <div className="sscontentImage">
            <div>
              <img src={forescout} alt="not found" />
            </div>
          </div>
          <div className="sscontent">
            <p className="p1">
              <p>
                <span>Client Overview : </span> <br />
                Forescout, a leading player in the cybersecurity sector,
                envisioned expanding its operations to Pune, India to tap into
                the country's burgeoning talent pool and enhance its global
                operations. Seeking a strategic partner, Forescout collaborated
                with RADEE8 Advisory, well established advisory firm known for
                its expertise in international business setups. The objective
                was to set up a virtual work-from-home team for Forescout's
                India operations and create a physical office space in a
                co-working environment. Forescout needed local expertise to
                support them in navigating Indian regulatory requirements, IT
                infrastructure and equipment procurement, Compliance with
                compliance with Indian taxation laws, GST filing, Identifying
                and establishing a presence in a suitable co-working space etc.
              </p>
              <br />
              {/* <p className="p3">RADEE8 Advisory’s Approach:</p><br/> */}
              <p>
                <span>Entity Establishment : </span> <br /> Conducted a thorough
                market analysis to identify the most suitable location for
                Forescout’s operations in India. This encompassed the entire
                process from name registration to navigating the legal
                landscape.
              </p>
              <br />
              <p>
                <span>Fiduciary Services : </span> <br /> To ensure a strong
                local presence, RADEE8 carefully selected and appointed local
                directors in alignment with Indian regulations, providing
                Forescout with the necessary expertise on the ground.
              </p>
              <br />
              <p>
                <span>Accounting and Compliance Services : </span> <br /> RADEE8
                took charge of Forescout's financial framework, implementing
                robust accounting systems while keeping a vigilant eye on
                compliance with Indian accounting standards.
              </p>
              <br />
              <p>
                <span>Virtual Team Setup : </span> <br /> RADEE8 Advisory
                spearheaded the establishment of virtual work from home team.
                This involved the implementation of secure communication tools,
                ensuring that remote employees could collaborate seamlessly.
                Security measures were implemented to safeguard Forescout's
                sensitive information, and the virtual team was set up to mirror
                the efficiency and productivity of an in-office environment.
              </p>
              <br />
              <p>
                <span>Physical office setu :</span> <br /> RADEE8 facilitated
                the establishment of a dynamic and flexible workspace in a
                premium co-working space (in prime business district of Pune),
                accommodating Forescout’s initial team. This approach allowed
                for scalability as the team expanded. For physical set up in a
                co-working space, RADEE8 Advisory identified the selection of
                suitable location, negotiated lease agreements, and managed the
                interior set up, IT Infrastructure to meet Forescout’s
                specifications. A collaborative work environment was created,
                promoting employee well-being and fostering a sense of community
                among the team.
              </p>
              <br />
              <p>
                <span>IT Infrastructure Services : </span> <br /> RADEE8 managed
                the entire spectrum of IT infrastructure services. This included
                the procurement of IT equipment and the establishment of a
                robust delivery mechanism across India, ensuring that
                Forescout's team had the necessary tools for seamless
                operations, promoting efficiency and security.
              </p>
              <br />
              <p>
                <span>Leadership and SOC Establishment : </span> <br /> RADEE8
                facilitated the smooth integration of Forescout's leadership
                into the Indian business landscape by finding out the right
                talent for Forescout to manage India operations. This included
                cultural orientation and strategic guidance to ensure effective
                leadership within the newly established SOC.
              </p>
              <br />
              <p>
                <span>GST Filing and Tax Compliance : </span> <br /> Managing
                Goods and Services Tax (GST) filings became a hassle-free task
                under RADEE8's guidance, as the advisory firm handled the
                complexities of India's taxation framework.
              </p><br />
              <p>
                Forescout seamlessly blended into the local business ecosystem,
                meeting the regulatory standards and boasting a formidable team.
                The successful partnership between Forescout and RADEE8 became a
                benchmark for international companies venturing into India’s
                dynamic market.
              </p>
            </p>
            {/* <p className="pop"></p>
            {togle && <p className="p2"></p>}
            <Link to="" onClick={toggle}>
              Read {togle ? "less" : "more"}&nbsp;&nbsp;
              <img src={togle ? CaretTop : CaretRight} alt="Read more"></img>
            </Link> */}
          </div>
        </div>
      </div>
      <div>
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
          {testimonial.map((i) => {
            return (
              <>
                <SwiperSlide>
                  <div className="inner-testimonial-image">
                    <img src={i.image} alt="a" />
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default SuccessStory;
