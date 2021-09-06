import React, { useContext } from "react";
import LoansContext from "../State/loans-context";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";
import classes from "./Card.module.css";

const CardFixed = (props) => {
  const ctx = useContext(LoansContext);
  const history = useHistory();

  const { t } = useTranslation();

  const bestRateFilteredF = ctx.loans.filter((rate) => {
    return rate.bestRate === ctx.rateFix;
  });

  const cartFixed = (
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

  return <div>{cartFixed}</div>;
};

export default CardFixed;
