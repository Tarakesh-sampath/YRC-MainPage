import React, { useState } from "react";
import "./Card.css";

const Card = ({ image, title, description, isFlipped, onClick }) => {
  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={onClick}>
      <div className="card-inner">
        {/* Front Side */}
        <div className="card-front">
          <img src={image} alt={title} className="card-image" />
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        {/* Back Side */}
        <div className="card-back">
          <img src={require("../../../images/yrc_logo.svg").default} alt="YRC Logo" className="logo" />
        </div>
      </div>
    </div>
  );
};

export default Card;
