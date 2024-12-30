import React, { useState } from "react";
import Card from "./Card";
import "./Display_event.css";

const Display_event = ({ events, logo }) => {
  const [currentIndex, setCurrentIndex] = useState(1); // Middle card index
  const [flippedCards, setFlippedCards] = useState(Array(events.length).fill(true));

  const handleCardClick = (index) => {
    const newFlipped = [...flippedCards];
    newFlipped[index] = !newFlipped[index];
    setFlippedCards(newFlipped);
  };

  const getCardData = (index) => events[index % events.length];

  return (
    <div className="scrollable-array">
      {events.map((event, index) => (
        <div key={index} className="card-container">
          <Card
            {...event}
            isFlipped={flippedCards[index]}
            onClick={() => handleCardClick(index)}
            logo={logo}
          />
        </div>
      ))}
    </div>
  );
};

export default Display_event;
