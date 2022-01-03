import React from "react";
import CardFixed from "./CardFixed";
import CardVariable from "./CardVariable";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";
import classes from "./LoanList.module.css";

const LoanList = () => {
  const history = useHistory();

  const { t } = useTranslation();

  return (
    <div className={classes.grid}>
      <div className={classes.list}>
        <CardFixed />
        <button className={classes.btn} onClick={() => history.push("/fix")}>
          {t("Select")}
        </button>
      </div>
      <div className={classes.list}>
        <CardVariable />
        <button
          className={classes.btn}
          onClick={() => history.push("/variable")}
        >
          {t("Select")}
        </button>
      </div>
    </div>
  );
};

export default LoanList;
