import React, { useEffect, useRef } from "react";
import "./scrolling.css";
const Scrolling = ({heading,paragraph,image,pos}) => {
  const container = useRef(null);
  const mask = useRef(null);
  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const initialMaskSize = 0.1;
  const targetMaskSize = 30;

  const animate = () => {
    const masksize = targetMaskSize * getScrollProgress();
    mask.current.style.webkitMaskSize =
      (initialMaskSize + masksize) * 50 + "%";
    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    const scrollProgress = mask.current.offsetTop / (container.current.getBoundingClientRect().height - window.innerHeight);
    return scrollProgress;
  };

  return (
    <>
    <main className="scrolling">
      <div ref={container} className="scrollContainer">
        <div ref={mask} className="stickymask" style={{maskImage:`url(${image})`,maskPosition:`${pos}`}}>
          <div className="maskR" >
            <div className="textbox">
              <h2>{heading}</h2>
              <p>{paragraph}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
};

export default Scrolling;
