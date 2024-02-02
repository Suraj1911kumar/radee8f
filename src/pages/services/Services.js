import React, { useState } from "react";
// Style
import "./Services.css";
import { NavHashLink } from "react-router-hash-link";
import servicesapi from "./servicesapi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";

const Services = () => {
  const [approch, setApproch] = useState(false);
  function approchbtn() {
    setApproch(!approch);
  }

  const scroll_to_Top = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  return (
    <>
      <div>
        <div className="container service-section" data-aos="fade-up">
          <div className="sectionHead row">
            <h2 data-aos="flip-left" style={{ textTransform: "uppercase" }}>
              Our Services
            </h2>
            <p>

              Our services offer your organization cost optimization, access to
              a global talent pool, and diverse perspectives on business issues.
              Our services involves collaboration across borders, leveraging
              technology to facilitate communication and project management.
              Take advantage of business process improvement and restructuring,
              market research, or digital transformation. Our management
              consultancy contribute significantly to a company's growth and
              success in the global marketplace.
            </p>
          </div>

          {servicesapi.map((service, item) => {
            const { id, id2, headding, image, description, innerHead } =
              service;

            return (
              <>
                <div className="serviceBody row" id={id2} key={id}>
                  <h3 className="show-on-mobile" data-aos="fade-up">
                    {headding}
                  </h3>

                  <div className="column column-40" data-aos="fade-right">
                    <img src={image} alt="" />
                  </div>
                  <div className="column column-60" data-aos="fade-left">
                    <div>
                      <h3 className="hide-on-mobile">{headding}</h3>
                      <p>{description}</p>
                    </div>

                    <div className="closebtn">
                      {innerHead.map((i) => {
                        const { id, innerhead, link } = i;
                        return (
                          <>
                            {
                              <p>
                                <span className="linkSpan">
                                  <NavHashLink
                                    to={link}
                                    scroll={(el) => {
                                      const yOffset = -500;
                                      const y =
                                        el.getBoundingClientRect().top +
                                        window.pageYOffset +
                                        yOffset;
                                      window.scrollTo({
                                        top: y,
                                        behavior: "smooth",
                                      });
                                    }}
                                  >
                                    <p>{innerhead}</p>

                                    <GoArrowUpRight />
                                  </NavHashLink>
                                </span>
                              </p>
                            }
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
