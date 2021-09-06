import React, { useState } from "react";
import useBestRate from "../hooks/use-bestRate";
import useHttp from "../hooks/use-Http";

const LoansContext = React.createContext({
  loans: [],
  rateFix: () => [],
  rateVariable: () => [],
});

export const LoansContextProvider = (props) => {
  const DEFAULT_HEADERS = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "x-nesto-candidat": "Alex Gharibi",
  };

  const { isLoading, error, loans, fetchHandler } = useHttp({
    url: "https://nesto-fe-exam.vercel.app/api/products",
    headers: {
      ...DEFAULT_HEADERS,
    },
  });

  const fix = loans.filter((fix) => {
    return fix.type === "FIXED";
  });

  const variable = loans.filter((variable) => {
    return variable.type === "VARIABLE";
  });

  const rateFix = useBestRate(fix);

  const rateVariable = useBestRate(variable);

  return (
    <LoansContext.Provider
      value={{
        loans,
        rateFix,
        rateVariable,
        isLoading,
        error,
        fetchingdata: fetchHandler,
      }}
    >
      {props.children}
    </LoansContext.Provider>
  );
};

export default LoansContext;
