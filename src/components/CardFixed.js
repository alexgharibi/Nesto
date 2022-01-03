import React, { useContext } from "react";
import LoansContext from "../State/loans-context";
import classes from "./Card.module.css";

const CardFixed = () => {
  const ctx = useContext(LoansContext);

  const bestRateFilteredF = ctx.loans.filter((rate) => {
    return rate.bestRate === ctx.bestRateFixLoan;
  });

  const cardFixed = (
    <ul>
      {bestRateFilteredF.map((loan) => (
        <li className={classes["list-primary"]} key={loan.id}>
          <h2>{loan.type}</h2>
          <h2>{loan.name}</h2>
          <h1>{loan.bestRate}%</h1>
          <p>{loan.lenderName}</p>
        </li>
      ))}
    </ul>
  );

  return <div>{cardFixed}</div>;
};

export default CardFixed;
