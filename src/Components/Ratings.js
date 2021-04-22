import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../App.css";



const StarRating = ({rate}) => {
  const [rating, setRating] = useState(rate);
  const [hover, setHover] = useState(null);
  
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        StarRating.defaultProps = {
          setRating: () => {},
          rate: 1,
        };
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
             
            />
            <FaStar
              className="stat"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={30}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};
StarRating.defaultProps = {
  setRating: () => {},
  rate: 1,
};

export default StarRating;