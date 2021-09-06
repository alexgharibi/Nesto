import React, { useContext } from "react";
import logo from "../images/logo.png";
import LoansContext from "./../State/loans-context";
import { useTranslation } from "react-i18next";
import classes from "./Header.module.css";

const Header = () => {
  const ctx = useContext(LoansContext);

  const { t } = useTranslation();

  return (
    <header className={classes.header}>
      <img src={logo} />
      <button className={classes.btn} onClick={ctx.fetchingdata}>
        {t("BestRate")}
      </button>
    </header>
  );
};

export default Header;
