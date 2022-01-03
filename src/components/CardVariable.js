import React, { useContext } from "react";
import LoansContext from "../State/loans-context";
import classes from "./Card.module.css";

const CardVariable = () => {
  const ctx = useContext(LoansContext);

  const bestRateFilteredV = ctx.loans.filter((rate) => {
    return rate.bestRate === ctx.bestRateVariableLoan;
  });

  const cardVariable = (
    <ul>
      {bestRateFilteredV.map((loan) => (
        <li className={classes["list-primary"]} key={loan.id}>
          <h2>{loan.type}</h2>
          <h2>{loan.name}</h2>
          <h1>{loan.bestRate}%</h1>
          <p>{loan.lenderName}</p>
        </li>
      ))}
    </ul>
  );

  return <div>{cardVariable}</div>;
};

export default CardVariable;
