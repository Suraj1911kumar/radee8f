import React from "react";
// Style
import "./service.css";
import R from "../../assets/images/R.png";
import A from "../../assets/images/A.png";
import D from "../../assets/images/D.png";
import E from "../../assets/images/E.png";
import E8 from "../../assets/images/8.png";
import Scrolling from "../../components/Scrollevent/Scrolling";
const Service = () => {
  
  return (
    <>
      <Scrolling
        id="1"
        heading="RADICAL"
        paragraph="Welcome to the Innovation Hub at RADEE8 – a dedicated space where creativity meets strategy, and ideas transform into groundbreaking solutions. Here, we push the boundaries of conventional thinking, leveraging cutting-edge technologies and visionary approaches to shape the future of global businesses."
        class1="maskR"
        image={R}
      />
      <Scrolling
        id="2"
        heading="AGILE"
        paragraph="Futuristic Technologies: Embark on a journey through the latest technological frontiers. From AI and machine learning to blockchain and beyond, we explore, innovate, and integrate these advancements into your business strategy."
        class1="maskA"
        image={A}
        pos="50% 65%"

      />
      <Scrolling
        id="3"
        heading="DISRUPTIVE"
        paragraph="R&D Initiatives: Dive into our Research and Development initiatives. We thrive on curiosity and continuous learning, driving innovation through projects that challenge the status quo and redefine industry standards."
        class1="maskD"
        image={D}
        pos="center 15%"
      />
      <Scrolling
        id="4"
        heading="EFFCIENT"
        paragraph="Prototyping Playground: Step into our Prototyping Playground where ideas come to life. We transform concepts into tangible prototypes, allowing you to visualize and experience the potential of groundbreaking innovations."
        class1="maskE"
        image={E}
      />
      <Scrolling
        id="5"
        heading="ENERGETIC"
        paragraph="Tech Talks and Workshops: Engage in stimulating discussions and hands-on workshops with industry experts. Our Tech Talks provide insights into emerging trends, while workshops offer practical knowledge to empower your team with the latest skills."
        class1="maskE"
        image={E}
      />
      <Scrolling
        id="6"
        heading="LIMITLESS"
        paragraph="Collaborative Innovation Spaces: Join forces with other forward-thinking minds in our Collaborative Innovation Spaces. These areas are designed to foster creativity, encourage collaboration, and spark the exchange of ideas that can lead to transformative solutions.."
        class1="mask8"
        image={E8}

      />
    </>
  );
};

export default Service;
