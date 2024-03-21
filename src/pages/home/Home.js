import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// Style
import "./Home.css";

// Images
import HomeVector from "../../assets/images/home-vector.png";

// Components
import Tile from "../../components/tile/Tile.js";
import Card from "../../components/card/Card.js";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import HomeSlider from "../../components/HomeSlider/HomeSlider.js";
import HomeSliderTestmonal from "../../components/HomeSlider/HomeSliderTestmonal.js";

const Home = () => {
  return (
    <>
      <section className="hero" id="hero">
        <div className="container">
          <div className="row flex-wrap wrap-reverse align-items-center herosecond  ">
            <div className="column column-60 hero-text">
              <div className="inner ">
                <h2 data-aos="fade-up" data-aos-duration="1000">
                  Elevate Your Global Business with RADEE8
                </h2>
                <p data-aos="fade-up" data-aos-duration="1500">
                  Welcome to RADEE8, your catalyst for global business success.
                  Our team of seasoned advisors specializes in assisting
                  corporations and startups worldwide to establish their
                  ventures in India and manage the support ecosystem.
                  <br /> Talent Acquisition, Staff Augmentation, Finance, HR,
                  Payroll, IT Support, Office Setup, Company Registration,
                  Regulatory Compliance and Taxation, and Facility Management—we
                  are committed to propelling your business forward.
                </p>
              </div>
            </div>
            <div className="column column-40">
              <div
                className="inner graphics"
                data-aos="fade-in"
                data-aos-duration="1000"
              >
                <img alt="Graphics" src={HomeVector}></img>
              </div>
            </div>
          </div>
          <div className="our-specs">
            <div className="container">
              <ul className="row flex-wrap justify-content-center">
                <li
                  className="inner"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h3>We Are Focused...</h3>
                </li>
                <li
                  className="inner"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <h3>We Are Fast...</h3>
                </li>
                <li
                  className="inner"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <h3>We Are Futuristic...</h3>
                </li>
              </ul>
              <center className="section-info">
                <h3
                  className="text-green"
                  data-aos="fade-up"
                  data-aos-duration="2500"
                >
                  <strong>We Are RADEE8</strong>
                </h3>
              </center>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <div className="glass">
            <div className="wrapper">
              <div className="row flex-wrap">
                <div className="column column-60">
                  <div className="inner">
                    <h2 data-aos="fade-up" data-aos-duration="1000">
                      Empowering Global Ventures: The RADEE8 Story
                    </h2>
                    <p data-aos="fade-up" data-aos-duration="1500">
                      At RADEE8, we are more than consultants; we are architects
                      of success, dedicated to empowering global ventures. Our
                      journey is defined by a passion for strategic excellence
                      and a commitment to turning business aspirations into
                      thriving realities.
                    </p>
                  </div>
                </div>
                <div className="column column-40">
                  <div className="inner">
                    <div className="tiles">
                      <div className="row flex-wrap justify-content-center">
                        <div className="column column-50">
                          <div
                            className="inner"
                            data-aos="fade-down"
                            data-aos-duration="500"
                          >
                            <Tile
                              percentage="40%"
                              title="savings on labour cost"
                              smallcont="*Deloitte"
                            />
                          </div>
                        </div>
                        <div className="column column-50">
                          <div
                            className="inner"
                            data-aos="fade-right"
                            data-aos-duration="1500"
                          >
                            <Tile
                              percentage="25%"
                              title="increase in efficiency"
                              smallcont="*McKinsey"
                            />
                          </div>
                        </div>
                        <div className="column column-50">
                          <div
                            className="inner"
                            data-aos="fade-left"
                            data-aos-duration="1500"
                          >
                            <Tile
                              percentage="79%"
                              title="more flexibale and aglie workforce"
                              smallcont="*Upwork"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <center className="section-info">
            <h2 className="title" data-aos="fade-up" data-aos-duration="500">
              Explore Our Services
            </h2>
            <h4
              className="sub-title"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Comprehensive Solutions Tailored for Your Success
            </h4>
            <p data-aos="fade-up" data-aos-duration="1500">
              At RADEE8, we understand that success in global ventures requires
              more than just advice; it demands a suite of comprehensive
              services designed to navigate the intricacies of international
              business.
            </p>
          </center>

          <div className="glass">
            <div className="wrapper">
              <div
                className="grid3x3"
                data-aos="fade-in"
                data-aos-duration="1000"
              >
                <Card
                  title="Entity Setup & Management"
                  slogan="Your Success, Our Priority"
                  bold="Client-Centric Solutions"
                  description="At RADEE8, your success is our paramount focus. Our client-centric approach means we tailor solutions to your unique needs."
                  link="services#Entity"
                  linktext="Learn More"
                />
                <Card
                  title="Administration & Facilities Management"
                  slogan="Decades of Excellence"
                  bold="Proven Expertise:"
                  description="Backed by proven success rate, our team brings decades of collective experience to the table."
                  link="services#Administration"
                  linktext="Learn More"
                />
                <Card
                  title="Accounting & Taxation"
                  slogan="Every Stage, Every Solution"
                  bold="Holistic Approach:"
                  description="From inception to expansion, our services are seamlessly integrated into a cohesive strategy for success."
                  link="services#Accounting"
                  linktext="Learn More"
                />
                <Card
                  title="Shared Human Resources"
                  slogan="Forward-Thinking Strategies"
                  bold="Innovative Solutions:"
                  description="We pride ourselves on implementing forward-thinking strategies that anticipate to the evolving needs of your business."
                  link="services#Shared"
                  linktext="Learn More"
                />
                <Card
                  title="Payroll Services"
                  slogan="Borders Beyond Boundaries"
                  bold="Global Perspective:"
                  description="Our global perspective extends beyond borders. RADEE8 understands the intricacies of international markets and leverages."
                  link="services#Payroll"
                  linktext="Learn More"
                />
                <Card
                  title="Technical & Software Compliance"
                  slogan="Your Success, Our Commitment"
                  bold="Collaborative Partnership:"
                  description="RADEE8 is not just a service provider; we are your dedicated partners in shaping a successful international future."
                  link="services#Technical"
                  linktext="Learn More"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="container">
          <center className="section-info">
            <h2 className="title" data-aos="fade-up" data-aos-duration="1000">
              The RADEE8 Approach
            </h2>
            <h4
              className="sub-title"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Crafting Transformation through Experience and Innovation
            </h4>
          </center>

          <div className="grid3x3" data-aos="fade-in" data-aos-duration="2000">
            <Card
              slogan="Your Success, Our Priority"
              title="Client-Centric Solutions"
              description="At RADEE8, your success is our paramount focus. Our client-centric approach means we tailor solutions to your unique needs,"
              link="#"
            />
            <Card
              slogan="Decades of Excellence"
              title="Proven Expertise:"
              description="Backed by a success rate of 95%, our team brings decades of collective experience to the table."
              link="#"
            />
            <Card
              slogan="Every Stage, Every Solution"
              title="Holistic Approach:"
              description="From inception to expansion, our services are seamlessly integrated into a cohesive strategy for success."
              link="#"
            />
            <Card
              slogan="Forward-Thinking Strategies"
              title="Innovative Solutions:"
              description="We pride ourselves on implementing forward-thinking strategies that anticipate to the evolving needs of your business."
              link="#"
            />
            <Card
              slogan="Borders Beyond Boundaries"
              title="Global Perspective:"
              description="Our global perspective extends beyond borders. RADEE8 understands the intricacies of international markets and leverages."
              link="#"
            />
            <Card
              slogan="Your Success, Our Commitment"
              title="Collaborative Partnership:"
              description="RADEE8 is not just a service provider; we are your dedicated partners in shaping a successful international future."
              link="#"
            />
          </div>
        </div>
      </section>

      <section className="our-values" id="our-values">
        <div className="container">
          <div className="wrapper">
            <h3 data-aos="fade-up" data-aos-duration="1000">
              Our Values
            </h3>
            <p data-aos="fade-up" data-aos-duration="1500">
              RADEE8 strives tirelessly to stand-on it's core values of
              Reliability, Simplicity, and Trust. It is our focused commitment
              and <b> Mission</b> to deliver Our Services through these values.
              <br />
              Our <b>Vision</b> is to build a better <b>Future</b> through
              technology.
            </p>
          </div>
          <div className="row flex-wrap values">
            <div className="column column-50">
              <div className="inner">
                <h3 data-aos="fade-up" data-aos-duration="1000">
                  Simplicity
                </h3>
                <hr></hr>
                <p data-aos="fade-up" data-aos-duration="1500">
                  We realize that offering value to customers can be achieved
                  through a straightforward and transparent approach, therefore
                  RADEE8 provides solutions that sound simple and work. We try
                  to provide minimalistic, effective solutions to complex
                  business problems.
                </p>
              </div>
            </div>

            <div className="column column-50">
              <div className="inner">
                <h3 data-aos="fade-up" data-aos-duration="1000">
                  Reliability
                </h3>
                <hr></hr>
                <p data-aos="fade-up" data-aos-duration="1500">
                  RADEE8 looks beyond the present to deliver future values. We
                  care about our stakeholders. We are someone you can count on,
                  taking ownership through our actions has been our guiding
                  principle.
                </p>
              </div>
            </div>

            <div className="column column-50">
              <div className="inner">
                <h3 data-aos="fade-up" data-aos-duration="1000">
                  Trust
                </h3>
                <hr></hr>
                <p data-aos="fade-up" data-aos-duration="1500">
                  We believe in doing the right thing always. We honour our
                  commitments and believe in complete transparency.
                </p>
              </div>
            </div>
          </div>
          <br></br>
        </div>
      </section>
      <section className="" data-aos="fade-up">
        <div className="containerFull">
          <HomeSlider />
        </div>
        <div className="containerFull">
          <HomeSliderTestmonal />
        </div>
      </section>

      <section className="newsletter" id="newsletter">
        <div className="container">
          <div className="row flex-wrap">
            <div className="column column-50">
              <div
                className="inner"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="glass">
                  <h3>RADEE8 Blogs</h3>
                  <p>
                    Sign up to the blogs and learn about new resources, new
                    commits, new proposals, and more.
                  </p>
                  <div className="row subscribe">
                    <input type="email" required placeholder="Email"></input>
                    <button className="btn bg-green subscribe">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="column column-50">
              <div
                className="inner"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="glass">
                  <h3>Let's Connect </h3>
                  <p>
                    More videos, more episodes. Discussions between industry
                    leaders in both blockchain and technology, our team, and
                    community developers.
                  </p>
                  <div className="row flex-wrap align-items-center">
                    <div className="column column-50">
                      <div className="inner">
                        <a
                          href="https://www.linkedin.com/company/RADEE8"
                          rel="noreferrer"
                          target="_blank"
                          className="inner-icon"
                        >
                          LinkedIn <FaLinkedin style={{ color: "#ffff" }} />
                        </a>
                      </div>
                    </div>
                    <div className="column column-50">
                      <div className="inner">
                        <a
                          href="https://twitter.com/RADEE8Official"
                          rel="noreferrer"
                          target="_blank"
                          className="inner-icon"
                        >
                          Twitter <FaXTwitter style={{ color: "#ffff" }} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
