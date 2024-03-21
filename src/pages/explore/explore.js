import React, { useEffect, useState } from "react";
import "./explore.css";
import { MdArrowDropDown } from "react-icons/md";
import exploreapi from "./exploreapi";
import { NavHashLink } from "react-router-hash-link";
const ExploreServices = () => {
  const [change, setChange] = useState(false);
  const [innerChange, setInnerChange] = useState(false);
  const [colorChangee,setcolorChange]=useState()

  function colorChange() {
    const span = document.getElementById("span");
    const localId = localStorage.getItem("id");
    // console.log(localId)
  }
  useEffect(() => {
    colorChange();
  });

  const openContainer = (item) => {
    if (change === item) {
      return setChange(!change);
    }
    setChange(item);
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
    <div className="exploreServices">
      <div className=" row container flex-wrap">
        <div className="column column-70 exploreHeading" id={`exploreHeading`}>
          {exploreapi.map((i, item) => {
            return (
              <>
                <div className="exploreheadingmain">
                  <div
                    className="maintext"
                    id={i.link}
                    onClick={() => openContainer(item)}
                  >
                    <span className={change === item ? "low1" : "side1"}>
                      <MdArrowDropDown />
                    </span>
                    <h3>{i.mainhead}</h3>
                  </div>
                  {i.innerHead.map((l, li) => {
                    return (
                      <>
                        <div
                          className={`exploreHeadingInner ${
                            change === item ? "showD" : "hideD"
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
                  <p itemID={id} >
                    <NavHashLink
                      to={`#${link}`}
                      scroll={(el) => {
                        const yOffset = -100;
                        const y =
                          el.getBoundingClientRect().top +
                          window.pageYOffset +
                          yOffset;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }}
                    >{
                      
                        (<span id="span">{mainhead}</span>)
                      
                    }
                      
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
