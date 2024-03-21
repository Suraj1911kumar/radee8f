import React from "react";
import { NavHashLink } from "react-router-hash-link";

// Style
import "./Card.css";

const Card = ({ slogan, title, bold, description, link, linktext }) => {
  return (
    <article className="card">
      <h5>{title}</h5>
      <small className="text-green">{slogan}</small>
      <h6>{bold}</h6>
      <p>{description}</p>
      <NavHashLink to={link} className="card-button">
        {linktext}
      </NavHashLink>
    </article>
  );
};

export default Card;
