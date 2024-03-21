import React, { useRef, useState } from "react";

// Style
import "./About.css";
// import ScrollWidthChange from '../../components/scrollevent/scrollimg'
// Images

import spiderI from "../../assets/images/spider01.png";
import spiderII from "../../assets/images/spider02.png";
import spiderIII from "../../assets/images/spyder03.png";

import Tile1 from "../../assets/images/tile1.png";
import Tile2 from "../../assets/images/tile2.png";
import Tile3 from "../../assets/images/tile3.png";
import Tile4 from "../../assets/images/tile4.png";
import Tile5 from "../../assets/images/tile5.png";
import Tile6 from "../../assets/images/tile6.png";
import Tile7 from "../../assets/images/tile7.png";
import Tile8 from "../../assets/images/tile8.png";

import FutureImage from "../../assets/images/future.png";
import ChangeWidth from "../../components/changeWidth/ChangeWidth";
import ChangeWidth2 from "../../components/changeWidth2/ChangeWidth2";
// import { refresh } from "aos";

const About = () => {
  // read more option
  const [togle, setToggle] = useState(false);
  const [approch, setApproch] = useState(false);
  function toggle() {
    setToggle(!togle);
  }
  function approchbtn() {
    setApproch(!approch);
  }

  // animation part
  const headingOne = useRef(null);
  const headingTwo = useRef(null);
  const animate_X = (e) => {
    const x = (window.innerWidth = e.pageX) / 10;
    headingOne.current.style.transform = `translateX(${x}px)`;
    headingTwo.current.style.transform = `translateX(-${x}px)`;
  };

  // scrollzoom in zoom out part.

  return (
    <>
      <section className="hero" id="hero">
        <div className="contents text-anim" onMouseMove={animate_X}>
          <div className="animation ltr" ref={headingOne}>
            <h2>Welcome to RADEE8</h2>
          </div>
          <div className="animation rtl text-right" ref={headingTwo}>
            <h2>
              Architects of the
              <span style={{ color: "var(--green)" }}> future</span>
            </h2>
          </div>
        </div>
        <div className="container">
          <div className="grid-4x2">
            <article
              className="v-card"
              data-aos="fade-up"
              data-aos-duration="300"
            >
              <img src={Tile1} alt="Tile1"></img>
              <div className="card-contents">
                <p>Visionaries at Heart</p>
                <p>Pioneering Futures</p>
                <p className="description">
                  Crafting visions into realities; we innovate with foresight,
                  envisioning the future landscape of global success.
                </p>
                {/* <Link to="">Explore</Link> */}
              </div>
            </article>
            <article
              className="v-card"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <img src={Tile2} alt="Tile2"></img>
              <div className="card-contents">
                <p>Dynamic Expertise</p>
                <p>Industry Virtuosos</p>
                <p className="description">
                  A dynamic blend of expertise, navigating industries with
                  finesse, leading you to triumph in global markets.
                </p>
                {/* <Link to="/underMaintainance">Explore</Link> */}
              </div>
            </article>
            <article
              className="v-card"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              <img src={Tile3} alt="Tile3"></img>
              <div className="card-contents">
                <p>Strategic Innovation</p>
                <p>Strategic Alchemy</p>
                <p className="description">
                  Fusing strategy and innovation, we redefine success, shaping a
                  landscape where every challenge is an opportunity.
                </p>
                {/* <Link to="/underMaintainance">Explore</Link> */}
              </div>
            </article>
            <article
              className="v-card"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <img src={Tile4} alt="Tile4"></img>
              <div className="card-contents">
                <p>Global Footprint</p>
                <p>Anchored in Excellence</p>
                <p className="description">
                  From Mumbai's hustle to Bangalore's tech pulse, we
                  strategically anchor success across global hubs.
                </p>
                {/* <Link to="/underMaintainance">Explore</Link> */}
              </div>
            </article>
            <article
              className="v-card"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <img src={Tile5} alt="Tile5"></img>
              <div className="card-contents">
                <p>Holistic Mastery</p>
                <p>Mastering Every Facet</p>
                <p className="description">
                  From market entry to intricate HR, we master the nuances,
                  offering holistic solutions for seamless global expansion.
                </p>
                {/* <Link to="/underMaintainance">Explore</Link> */}
              </div>
            </article>
            <article
              className="v-card"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              <img src={Tile6} alt="Tile6"></img>
              <div className="card-contents">
                <p>Client-Centric Passion</p>
                <p>Passion for Success</p>
                <p className="description">
                  Your success is our passion; we craft bespoke solutions,
                  tailoring our expertise to your unique ambitions.
                </p>
                {/* <Link to="/underMaintainance">Explore</Link> */}
              </div>
            </article>
            <article
              className="v-card"
              data-aos="fade-up"
              data-aos-duration="2100"
            >
              <img src={Tile7} alt="Tile7"></img>
              <div className="card-contents">
                <p>Sustainable Success</p>
                <p>Echoes of Endurance</p>
                <p className="description">
                  Sustaining success echoes through our commitment, creating
                  enduring solutions that withstand the tests of time.
                </p>
                {/* <Link to="/underMaintainance">Explore</Link> */}
              </div>
            </article>
            <article
              className="v-card"
              data-aos="fade-up"
              data-aos-duration="2400"
            >
              <img src={Tile8} alt="Tile8"></img>
              <div className="card-contents">
                <p>Creative Collaboration</p>
                <p>Ideas in Harmony</p>
                <p className="description">
                  Collaborate creatively; our team and yours, crafting a
                  symphony of ideas, innovation, and global success.
                </p>
                {/* <Link to="/underMaintainance">Explore</Link> */}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="journey" id="journey">
        <div className="container">
          <center className="section-info">
            <h2 className="title" data-aos="fade-up" data-aos-duration="500">
              Embark on a Transformative Journey
            </h2>
            <p data-aos="fade-up" data-aos-duration="1500">
              In the tapestry of global business, RADEE8 stands as a
              transformative force. With a dynamic ensemble of industry
              virtuosos, we transcend boundaries, turning challenges into
              opportunities and ambitions into achievements.
            </p>
          </center>
        </div>
      </section>
      <ChangeWidth2/>
      <section className="floating-cards-block" id="floating-cards-block">
        <div className="container">
          <div className="floating-cards-stage" id="floating-card-stage-fixed">
            <div>
              <h2>Strategic Steps, Global Impact</h2>
            </div>
          </div>

          <div className="floating-cards" id="floating-cards">
            <div className="row flex-wrap" style={{ display: "block" }}>
              <article className="parallax-cards" id="id">
                <div className="spiderImage">
                  <img src={spiderI} alt="no"  width='100%' style={{maxWidth:"400px"}} />
                </div>
                <div className="card-body">
                  <b>Market Navigation</b>
                  <p>Precision in Motion</p>
                  <p>
                    Explore untapped markets with RADEE8's precision-guided
                    approach. Each step is carefully crafted, contributing to
                    360 degree success.
                  </p>
                </div>
              </article>
              <article className="parallax-cards right">
                <div className="spiderImage">
                  <img src={spiderII} alt="no"  width='100%' style={{maxWidth:"400px"}}/>
                </div>
                <div className="card-body">
                  <b>Strategic Alliances for Success </b>
                  <p>Paths to Triumph</p>
                  <p>
                    Navigate through the complexities of today’s dynamic and
                    ever evolving business landscape.
                  </p>
                </div>
              </article>
              <article className="parallax-cards left">
                <div className="spiderImage">
                  <img src={spiderIII} width='100%' alt="no" style={{maxWidth:"400px"}}/>
                </div>
                <div className="card-body">
                  <b>Sustainable Growth Strategies </b>
                  <p> Crafting Tomorrow's Success</p>
                  <p>
                    RADEE8's strategic steps are a blueprint for sustainable
                    growth, ensuring and impact full result that endures well
                    into the future.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <ChangeWidth/>
      <section className="future" id="future">
        <div className="container">
          <div className="row flex-wrap">
            <div className="column column-40 contents">
              <h3>
                Future unfolds, <br />
                embrace change
              </h3>
            </div>
            <div className="column column-60">
              <img
                src={FutureImage}
                alt="Future"
                width="100%"
                // ref={tilt}
              ></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
