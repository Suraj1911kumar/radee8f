import React, {useState } from "react";
import "./explore.css";
import { MdArrowDropDown } from "react-icons/md";
import exploreapi from "./exploreapi";
import { NavHashLink } from "react-router-hash-link";
const ExploreServices = () => {
  const [change, setChange] = useState(null);
  const [innerChange, setInnerChange] = useState(false);

  const openInnerContainer = (l) => {
    if (innerChange === l.id) {
      return setInnerChange(innerChange);
    } else if (innerChange === l) {
      return setInnerChange(true);
    }
    setInnerChange(l);
  };

  return (
    <div className="exploreServices">
      <div className=" row container flex-wrap">
        <div
          className="column column-70 exploreHeading"
          id={`exploreHeading`}
        >
          {exploreapi
            .map((i, item) => {
              return (
                <>
                  <div className="exploreheadingmain">
                    <div className="maintext"id={i.link}>
                    <span className={change === item ? "low" : "side"}>
                      <MdArrowDropDown />
                    </span>
                    <h3 >{i.mainhead}</h3>
                    </div>
                  {i.innerHead.map((l, li) => {
                    return (
                      <>
                        <div
                          className={`exploreHeadingInner ${
                            change === li ? "hide" : "show"
                          } `}
                          id={`exploreHeadingInner${l.id}`}
                          key={l.id}
                          onClick={() => openInnerContainer(l.id)}
                        >
                          <h4 style={{ cursor: "pointer" }} id={l.link}>
                            <div className="innercontain">
                              {/*innear heading image  */}
                              <span
                                className={
                                  innerChange === l.id ? "low" : "side"
                                }
                              >
                                <MdArrowDropDown />
                              </span>
                              <li style={{ listStyle: "none" }}>
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
                                    key={index}
                                  >
                                    <ul
                                      className={
                                        innerChange === l.id ? "show" : "hide"
                                      }
                                    >
                                      <li>
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
              const { id, mainhead, link } = inn;
              return (
                <>
                  <p itemID={id}>
                    <NavHashLink
                      to={`#${link}`}
                      // onClick={() => sendId(id)}
                      scroll={(el) => {
                        const yOffset = -100;
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
      </div>
    </div>
  );
};

export default ExploreServices;
