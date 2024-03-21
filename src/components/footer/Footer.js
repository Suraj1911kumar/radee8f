import React from "react";
import { Link } from "react-router-dom";

import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { MdOutlineCall } from "react-icons/md";
// Style
import "./Footer.css";
import flag from "../../assets/images/usa flag.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row flex-wrap">
            <div className="column column-33footer footerCenter1">
            <h2>Create, Innovate, <span style={{color:"var(--green)"}}>Radiate</span></h2>
            </div>
            <div className="column column-33footer">
              <div className="inner">
                <h4>RADEE8</h4>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>

                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/services">Our Services</Link>
                  </li>
                  <li>
                    {/* <Link to="/success-story">Success Stories</Link> */}
                  </li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              {/* <div className="inner">
                <ul>
                  <li>
                    <Link to="/underMaintainance">Blog</Link>
                  </li>
                </ul>
              </div> */}
            </div>
            <div className="column column-33footer footerCenter">
              <h2>Create, Innovate, <span style={{color:"var(--green)"}}>Radiate</span></h2>
            </div>
            <div className="column column-33footer footercontact">
              <div className="inner">
                <h4>GET IN TOUCH</h4>
                <div className="social-icons">
                  <div className="upText">
                    <h3>
                      <FaEnvelope />
                    </h3>
                    <h4>Mail Us</h4>
                  </div>
                  <div>
                    <p>
                      <Link to="mailto:contact@radee8.com" target="_blank">
                        contact@radee8.com
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="social-icons">
                  <div className="upText">
                    <h3>
                      <MdOutlineCall />
                    </h3>
                    <h4>Call Us</h4>
                  </div>
                  <div className="div">
                    <p>
                      <Link to="tel:+919970396818">
                        <img
                          src="https://themayanagari.com/wp-content/uploads/2021/01/1-3.jpg"
                          alt="india flag"
                          className="social-icons-img"
                        />
                        +91 99703 96818 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </Link>
                    </p>

                    <p>
                      <Link to="tel:+1(408)505-6459">
                        <img
                          src={flag}
                          alt="US flag"
                          className="social-icons-img"
                        />
                        +1 (408) 505-6459
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="social-icons">
                  <div className="upText">
                    <h3>
                      <FaWhatsapp />
                    </h3>
                    <h4>Whatsapp</h4>
                  </div>
                  <div>
                    <p>
                      <Link to="https://wa.me/+919970396818" target="_blank">
                        <img
                          src="https://themayanagari.com/wp-content/uploads/2021/01/1-3.jpg"
                          alt="india flag"
                          className="social-icons-img"
                        />
                        +91 99703 96818
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="small-link">
          <Link to = "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwihh6uM8IqEAxVL2DgGHf1KCxgQFnoECBkQAQ&url=https%3A%2F%2Fwww2.deloitte.com%2Fus%2Fen%2Finsights%2Fdeloitte-review%2Fissue-21%2Fworkplace-culture-and-alternative-workforce.html&usg=AOvVaw11Iy6kqJXDJQgpYQ9FChbd&opi=89978449" target="_blank">*Deloitte</Link>
          <Link to="https://www.mckinsey.com/~/media/mckinsey/business%20functions/people%20and%20organizational%20performance/our%20insights/the%20state%20of%20organizations%202023/the-state-of-organizations-2023.pdf" target="_blank">*McKinsey</Link>
          <Link to = "https://content-static.upwork.com/blog/uploads/sites/3/2019/10/09173644/futureworkforce2019-upwork-youngergen-190301085641.pdf" target="_blank">*Upwork</Link>
          </div>
          <p
            style={{
              fontSize: "10px",
              color: "var(--footer-text)",
              paddingLeft: "1rem",
            }}
          >
            &copy; 2023 RADEE8. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
