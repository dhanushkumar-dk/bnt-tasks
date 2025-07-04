import { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating({ totalStars = 5 }) {
  const [rating, setRating] = useState(0); // final selected rating
  const [hover, setHover] = useState(null); // current hovered star

  return (
    <div style={{ display: "flex", gap: "5px", cursor: "pointer" }}>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={starValue}
              onClick={() => setRating(starValue)}
              style={{ display: "none" }}
            />
            <FaStar
              size={30}
              color={starValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <span style={{ marginLeft: "10px" }}>
        {rating ? `Rated ${rating} out of ${totalStars}` : "No rating"}
      </span>
    </div>
  );
}

export default StarRating;
