import React, { useContext } from "react";
import InputForm from "./Inputs";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CardFixed from "./CardFixed";
import LoansContext from "../State/loans-context";
import classes from "./Forms.module.css";

const FormsFix = () => {
  const ctx = useContext(LoansContext);
  const history = useHistory();

  const { t } = useTranslation();

  const id = ctx.loans
    .filter((rate) => {
      return rate.bestRate === ctx.rateFix;
    })
    .map((loan) => loan.id)
    .join("");

  console.log(id);

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
          <CardFixed />
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

export default FormsFix;
