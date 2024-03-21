import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
// Style
import "./Header.css";

// Images
import Logo from "../../assets/images/logo2.png";
import { navLinks } from "../../Constants/Navlinks";

const Header = () => {
  const [menu, setMenu] = useState(true);
  const [sticky, setSticky] = useState(false);
  const menuHandler = () => {
    setMenu(!menu);
  };
  const change = () => {
    setMenu(!menu);
  };
  const stickyHeader = () => {
    window.addEventListener("scroll", function () {
      window.scrollY > 2 ? setSticky(true) : setSticky(false);
    });
  };
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

  const [visible, setVisible] = useState(false);
  const scroll_to_Top = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  useEffect(() => {
    stickyHeader();
    setVisible();
  }, []);

  return (
    <>
      <div className="progress-container">
        <div className="progress-bar" id="myBar"></div>
      </div>
      <header className={sticky ? "sticky" : ""}>
        <div className="container">
          <nav className="nav" id="nav">
            <div className="nav-inner">
              <NavLink to="/">
                <img
                  src={Logo}
                  alt="Logo"
                  title="RADEE8"
                  className="logo logo2"
                  onClick={scroll_to_Top}
                ></img>
              </NavLink>
              <ul
                className={
                  menu
                    ? "row align-items-center menus"
                    : "row align-items-center menus activeX"
                }
              >
                {navLinks.map((i, index) => {
                  const { title, submenu, link } = i;
                  return (
                    <li className="nav-item" key={index}>
                      <NavLink to={link} onClick={change}>
                        <span onClick={scroll_to_Top}>{title}</span>
                      </NavLink>
                      {submenu && (
                        <div className="submenu">
                          <ul>
                            {submenu.map((j, subindex) => {
                              return (
                                <li>
                                  <NavHashLink
                                    to={j.subLink}
                                    scroll={(el) => {
                                      const yOffset = -200;
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
                                    {j.subtitle}
                                  </NavHashLink>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
              <button
                className={menu ? "hamburger" : "hamburger activeX"}
                onClick={menuHandler}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
