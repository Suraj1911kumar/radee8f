import React, { useState } from "react";
// Style
import "./Services.css";
import { NavHashLink } from "react-router-hash-link";
import servicesapi from "./servicesapi";
import { GoArrowUpRight } from "react-icons/go";

const Services = () => {
  const [approch, setApproch] = useState(false);
  function approchbtn() {
    setApproch(!approch);
  }

  const SetLocal = (id) => {
    localStorage.setItem("id", Math.floor(JSON.stringify(id)));
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
                    {/* <NavHashLink
                      to={`../explore#${id2}`}
                      scroll={(el) => {
                        const yOffset = -100;
                        const y =
                          el.getBoundingClientRect().top +
                          window.pageYOffset +
                          yOffset;
                        window.scrollTo({
                          top: y,
                          behavior: "smooth",
                        });
                      }}
                    > */}
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
                                <p key={id}>
                                  <span className="linkSpan">
                                    <NavHashLink
                                      to={link}
                                      scroll={(el) => {
                                        const yOffset = -100;
                                        const y =
                                          el.getBoundingClientRect().top +
                                          window.pageYOffset +
                                          yOffset;
                                        window.scrollTo({
                                          top: y,
                                          behavior: "smooth",
                                        });
                                      }}
                                      onClick={() => SetLocal(id)}
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
                    {/* </NavHashLink> */}
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
