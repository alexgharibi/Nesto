import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import InputForm from "./Inputs";
import { useTranslation } from "react-i18next";
import CardVariable from "./CardVariable";
import LoansContext from "../State/loans-context";
import classes from "./Forms.module.css";

const FormsVariable = () => {
  const ctx = useContext(LoansContext);
  const history = useHistory();

  const { t } = useTranslation();

  const id = ctx.loans
    .filter((rate) => {
      return rate.bestRate === ctx.rateVariable;
    })
    .map((loan) => loan.id)
    .join("");

  function addSubmitedFormHandler(submitedForm) {
    fetch("https://nesto-fe-exam.vercel.app/api/applications", {
      method: "POST",
      body: JSON.stringify({
        ...submitedForm,
        productId: id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <div>
      <div className={classes.grid}>
        <div className={classes.list}>
          <CardVariable />
        </div>
        <InputForm onAddForm={addSubmitedFormHandler} />
      </div>
      <div>
        <button className={classes.btn} onClick={() => history.push("/")}>
          {t("SelectAnother")}
        </button>
      </div>
    </div>
  );
};

export default FormsVariable;
