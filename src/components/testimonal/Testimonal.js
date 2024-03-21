import React from "react";
import "./testimonal.css";
import cysiv from "../../assets/images/cysiv.png";
import comma from "../../assets/images/Coomas.png";
const Testimonal = () => {
  return (
    <div>
      <div className="success-story">
        <div className="SuccessStoryheader">
          <h2 style={{ textTransform: "uppercase" }}>Testimonials</h2>
          <p>
            RADEE8 prides itself on being one of the most client-centric
            companies. Over the years, we have helped a lot of businesses
            achieve their full potential through our collaboration and
            consultancy. We would love to share some of testimonal and we look
            forward to helping you in your transformative journey.
          </p>
        </div>

        

        <div className="successStoryBody">
          <div className="successStoryContent">
            <div className="sscontentImage">
              <div>
                <img src={cysiv} alt="not found" />
              </div>
            </div>
            <div className="sscontent">
              <p className="p1">
                <p>
                  {/* <span>Client Overview : </span> <br /> */}I had the
                  pleasure to partner with Radee8 Advisory for almost 2 years
                  while serving as the Chief People Officer at Cysiv Inc, a
                  leading cybersecurity company that was acquired in 2023.
                </p>
                <br />
                {/* <p className="p3">RADEE8 Advisory’s Approach:</p><br/> */}
                <p>
                  {/* <span>Entity Establishment : </span> <br /> */}
                  Radee8 was our partner on all matters as Cysiv established
                  presence in India. The term at Radee8 were with us every step
                  of the way from creating legal entities, to hiring our 1st
                  employee, creating a competitive and compelling salary
                  structure and benefits offering, to handling all of our
                  payroll, operational, IT, and onboarding & off-boarding
                  logistics, and also helping us to find and secure an office
                  space that our employees enjoyed.
                </p>
                <br />
                <p>
                  {/* <span>Fiduciary Services : </span> <br />  */}
                  Many organisations will have an expertise in one area such as
                  recruitment and or in payroll.  However, we found Radee8 as a
                  strategic partner that provides a mature, high performing and
                  high compliance approach that enables your firm to establish
                  and compete for talent when entering a dynamic market like
                  India.
                </p>
                <br />
                <p>
                  {/* <span>Accounting and Compliance Services : </span> <br /> */}
                  Their team is trustworthy, and I very much endorse them to any
                  organisation seeking a results-oriented partner to establish a
                  strong reputation and presence in India and or in the Pune
                  area.”
                </p>
                <br />
                <p>
                  {/* <span>Virtual Team Setup : </span> <br />  */}
                  RADEE8 Advisory spearheaded the establishment of virtual work
                  from home team. This involved the implementation of secure
                  communication tools, ensuring that remote employees could
                  collaborate seamlessly. Security measures were implemented to
                  safeguard Forescout's sensitive information, and the virtual
                  team was set up to mirror the efficiency and productivity of
                  an in-office environment.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
