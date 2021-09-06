import React, { useState } from "react";
import useInput from "../hooks/use-input";
import { useTranslation } from "react-i18next";
import classes from "./Inputs.module.css";

const InputForm = (props) => {
  const isNotEmptty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");

  const { t } = useTranslation();

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(isNotEmptty);

  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangedHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhoneInput,
  } = useInput(isNotEmptty);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput(isNotEmptty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredLastNameIsValid &&
    enteredPhoneIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    if (!formIsValid) {
      return;
    }

    const submitedForm = {
      firstName: enteredName,
      lastName: enteredLastName,
      phone: enteredPhone,
      email: enteredEmail,
    };
    props.onAddForm(submitedForm);
    resetNameInput();
    resetPhoneInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const nameInputClasses = !nameInputHasError
    ? "form-control"
    : "form-control invalid";

  const lastNameInputClasses = !lastNameInputHasError
    ? "form-control"
    : "form-control invalid";

  const emailInputClasses = !emailInputHasError
    ? "form-control"
    : "form-control invalid";

  const phoneInputClasses = !phoneInputHasError
    ? "form-control"
    : "form-control invalid";

  return (
    <form className={classes["form-body"]} onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">{t("FirstName")} </label>
        <input
          type="text"
          id="firstname"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className={classes["error-text"]}>{t("Required")}</p>
        )}
      </div>
      <div className={lastNameInputClasses}>
        <label htmlFor="name">{t("LastName")}</label>
        <input
          type="text"
          onChange={lastNameChangedHandler}
          onBlur={lastNameBlurHandler}
          value={enteredLastName}
        />

        {lastNameInputHasError && (
          <p className={classes["error-text"]}>{t("Required")}</p>
        )}
      </div>
      <div className={phoneInputClasses}>
        <label htmlFor="phone">{t("Phone")}</label>
        <input
          type="number"
          id="Phone"
          onChange={phoneChangedHandler}
          onBlur={phoneBlurHandler}
          value={enteredPhone}
        />
        {phoneInputHasError && (
          <p className={classes["error-text"]}>{t("Required")}</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">{t("Email")}</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className={classes["error-text"]}>{t("Required")}</p>
        )}
      </div>
      <div className={classes["form-actions"]}>
        <button disabled={!formIsValid}>{t("Submit")}</button>
      </div>
    </form>
  );
};

export default InputForm;
