import React from "react";
import "./ratingDisplay.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RatingDisplay = ({ rating }) => {
  const val = [];
  for (let i = 0; i < rating; i++) {
    val.push(1);
  }
  let sum = 0;
  return (
    <div>
      {rating ? (
        val.map(() => (
          <FontAwesomeIcon
            id={(sum += 1)}
            key={(sum += 1)}
            icon="fa-solid fa-star"
          />
        ))
      ) : (
        <p>No rating</p>
      )}
    </div>
  );
};
export default RatingDisplay;
