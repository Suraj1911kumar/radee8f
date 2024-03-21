import React, { useEffect, useRef, useState } from "react";
import "./changewidth.css";
import ElasticImage from "../../assets/images/elastic.png";
import { Link } from "react-router-dom";
import CaretRight from "../../assets/images/next.png";
import CaretTop from "../../assets/images/topup.png";

const ChangeWidth2 = () => {
  const ref = useRef(null);
  const main = useRef(null);
  const [togle, setToggle] = useState(false);
  const [approch, setApproch] = useState(false);
  useEffect(() => {
    const element = ref.current;
    // const w = main.current;
    const changeWidthid = document.getElementById("changeWidth");
    const changeWidth = () => {
      var scroll = window.scrollY / 5;
      var width = Math.floor(Math.min(370 - scroll));
      element.style.width = width + "%";
    };
    if (element.style.width === "61%") {
      element.style.position = "sticky";
      changeWidthid.style.display = "flex";
    }

    window.addEventListener("scroll", function () {
      requestAnimationFrame(changeWidth);
    });
    return () => {
      window.removeEventListener("scroll", function () {
        requestAnimationFrame(changeWidth);
      });
    };
  }, []);
  function toggle() {
    setToggle(!togle);
  }
  function approchbtn() {
    setApproch(!approch);
  }

  return (
    <div className="changeWidth" ref={main} id="changeWidth">
      <div className="containerwidth">
        <div className="row flex flex-wrap flex-row-reverse">
          <div className="expand" ref={ref} id="expand">
            <img src={ElasticImage} alt="Elastic" width="100%" />
          </div>
          <div
            className="column-contents expandtext2"
            data-aos="fade-in"
            data-aos-duration="2100"
          >
            <div>
              <h3>Sculpting Success with Comprehensive Approach</h3>
              <p>
              RADEE8 is not just a service provider, we are artisans of management.
              </p>
              {approch && (
                <p>
                  We have a proven record with diverse set of Clients'. RADEE8 offers tailor made solutions to businessess facing multitude challenges in today's dynamic world.
                </p>
              )}
              <Link to="" onClick={approchbtn}>
                Read {approch ? "less" : "more"} &nbsp;&nbsp;
                <img src={approch ? CaretTop : CaretRight} alt="Read more" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeWidth2;
