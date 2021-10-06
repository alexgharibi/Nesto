import React, { useState } from "react";
import logo1 from "../images/shirt-1.jpg";
import classes from "./Main.module.css";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const Main = () => {
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
    <React.Fragment>
      <div className={classes.grid}>
        <div className={classes.block}>
          <img src={logo1} alt="shirt" />
          <div className={classes["block-p"]}>Ultrafine Merino T-Shirt</div>
          <div className={classes["block-p"]}>$80.00</div>
          <button className={classes.btn}>Add to Card</button>
          <div>
            {stars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  size={24}
                  style={{ marginRight: 10, cursor: "pointer" }}
                  color={
                    (hoverValue || starValue) > index
                      ? colors.orange
                      : colors.grey
                  }
                  onClick={() => handleClick(index + 1)}
                  onMouseOver={() => handleHover(index + 1)}
                  onMouseLeave={() => handleHoverLeave(index + 1)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
