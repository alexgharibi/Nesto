import React from "react";
import classes from "./Main.module.css";
import { shirts } from "./shirtData";
import StarsRating from "./StarsRating";

const Main = () => {
  const renderCard = (shirt) => {
    return (
      <div className={classes.block} key={shirt.id}>
        <img src={shirt.image} alt="shirt" />
        <div className={classes["block-p"]}>{shirt.title}</div>
        <div className={classes["block-p"]}>{shirt.amount}</div>
        <button className={classes.btn}>Add to Card</button>
        <StarsRating />
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className={classes.grid}>{shirts.map(renderCard)}</div>
    </React.Fragment>
  );
};

export default Main;

// const card = (
//   <div className={classes.block}>
//     <img src={logo1} alt="shirt" />
//     <div className={classes["block-p"]}>Ultrafine Merino T-Shirt</div>
//     <div className={classes["block-p"]}>$80.00</div>
//     <button className={classes.btn}>Add to Card</button>
//     <div>
//       {stars.map((_, index) => {
//         return (
//           <FaStar
//             key={index}
//             size={24}
//             style={{ marginRight: 10, cursor: "pointer" }}
//             color={
//               (hoverValue || starValue) > index ? colors.orange : colors.grey
//             }
//             onClick={() => handleClick(index + 1)}
//             onMouseOver={() => handleHover(index + 1)}
//             onMouseLeave={() => handleHoverLeave(index + 1)}
//           />
//         );
//       })}
//     </div>
//   </div>
// );
