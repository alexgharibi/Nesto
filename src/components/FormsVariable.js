import React, { useContext } from "react";
import CardVariable from "./CardVariable";
import LoansContext from "../State/loans-context";
import InputForm from "./Inputs";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import classes from "./Forms.module.css";

const FormsVariable = () => {
  const ctx = useContext(LoansContext);

  const history = useHistory();

  const { t } = useTranslation();

  const id = ctx.loans
    .filter((rate) => rate.bestRate === ctx.bestRateVariableLoan)
    .map((loan) => loan.id)
    .join("");

  const addSubmitedFormHandler = (submitedForm) => {
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
  };

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
