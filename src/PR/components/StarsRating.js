import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { colors } from "./shirtData";

const StarsRating = () => {
  const [starValue, setStarValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setStarValue(value);
  };

  const handleHover = (value) => {
    setHoverValue(value);
  };

  const handleHoverLeave = (value) => {
    setHoverValue(undefined);
  };
  return (
    <div>
      {stars.map((_, index) => {
        return (
          <FaStar
            key={index}
            size={24}
            style={{ marginRight: 10, cursor: "pointer" }}
            color={
              (hoverValue || starValue) > index ? colors.orange : colors.grey
            }
            onClick={() => handleClick(index + 1)}
            onMouseOver={() => handleHover(index + 1)}
            onMouseLeave={() => handleHoverLeave(index + 1)}
          />
        );
      })}
    </div>
  );
};

export default StarsRating;
