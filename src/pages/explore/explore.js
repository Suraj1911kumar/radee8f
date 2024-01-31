import React, { useEffect, useState } from "react";
import "./explore.css";
import { MdArrowDropDown } from "react-icons/md";
import exploreapi from "./exploreapi";
import { NavHashLink } from "react-router-hash-link";
const ExploreServices = () => {
  const [change, setChange] = useState(null);
  const [innerChange, setInnerChange] = useState(false);
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    getItemLocal();
  }, []);

  const getItemLocal = () => {
    const getID = JSON.parse(localStorage.getItem("id"))
    if(getID){
      setFilter(getID)
    }
  };

  const sendId = (id) => {
    localStorage.setItem("id", JSON.stringify(id));
  };

  const openInnerContainer = (l) => {
    if (innerChange === l.id) {
      return setInnerChange(innerChange);
    } else if (innerChange === l) {
      return setInnerChange(true);
    }
    setInnerChange(l);
  };

  return (
    <div className="exploreServices" data-aos="fade-up" data-aos-duration="500">
      <div
        className=" row container flex-wrap"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        {exploreapi
          .filter((k) => k.id === filter)
          .map((i, item) => {
            return (
              <>
                <div
                  className="column column-70 exploreHeading"
                  id={`exploreHeading${item}`}
                  key={item}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h3>
                    <span className={change === item ? "side" : "low"}>
                      <MdArrowDropDown />
                    </span>
                    {i.mainhead}
                  </h3>

                  {i.innerHead.map((l, li) => {
                    return (
                      <>
                        <div
                          className={`exploreHeadingInner ${
                            change === li ? "hide" : "show"
                          } `}
                          id={`exploreHeadingInner${l.id}`}
                          key={l.id}
                          data-aos="fade-up"
                          data-aos-duration="1500"
                          onClick={() => openInnerContainer(l.id)}
                        >
                          <h4 style={{ cursor: "pointer" }} id={item}>
                            <div
                              className="innercontain"
                              data-aos="fade-up"
                              data-aos-duration="1200"
                            >
                              {/*innear heading image  */}
                              <span
                                className={
                                  innerChange === l.id ? "low" : "side"
                                }
                              >
                                <MdArrowDropDown />
                              </span>
                              <li
                                style={{ listStyle: "none" }}
                                data-aos="fade-up"
                                data-aos-duration="2000"
                              >
                                {l.innerhead}
                              </li>
                            </div>
                          </h4>

                          {/* inner description */}
                          <div id={`${li}`}>
                            {l.discription.map((des, index) => {
                              return (
                                <>
                                  <div
                                    id={`innerdiscription${index}`}
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    key={index}
                                  >
                                    <ul
                                      className={
                                        innerChange === l.id ? "show" : "hide"
                                      }
                                    >
                                      <li
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                      >
                                        <b>{des.descriptionhed}</b>
                                        {des.description1}
                                      </li>
                                    </ul>
                                  </div>
                                </>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="column column-30">
                  <div className="all_link">
                    <h3>Services</h3>
                    <hr />
                    <br />
                    {exploreapi.map((inn) => {
                      const { id, mainhead } = inn;
                      return (
                        <>
                          <p itemID={id} onClick={() => sendId(id)}>
                            <NavHashLink
                              to=""
                              scroll={(el) => {
                                const yOffset = -200;
                                const y =
                                  el.getBoundingClientRect().top +
                                  window.pageYOffset +
                                  yOffset;
                                window.scrollTo({ top: y, behavior: "smooth" });
                              }}
                            >
                              {mainhead}
                            </NavHashLink>
                          </p>
                        </>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default ExploreServices;
