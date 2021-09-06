import React, { useContext } from "react";
import i18n from "i18next";
import LoansContext from "../State/loans-context";
import image1 from "../images/image1.jpg";
import LoanList from "./LoanList";
import { useTranslation } from "react-i18next";
import classes from "./MainPage.module.css";

const MainPage = () => {
  const ctx = useContext(LoansContext);
  const { t } = useTranslation();

  const onChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  let content = (
    <header className={classes["body-main"]}>
      <h2>{t("BringJoy")}</h2>
      <p>{t("BestFix")} </p>
      <img className={classes["content--img"]} src={image1} />
    </header>
  );

  if (ctx.loans.length > 0) {
    content = <LoanList />;
  }

  if (ctx.error) {
    content = <p>{ctx.error}</p>;
  }

  if (ctx.isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <div>
      <select name="language" onChange={onChange} className={classes.selector}>
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>
      <section className={classes.content}>{content}</section>
    </div>
  );
};

export default MainPage;
