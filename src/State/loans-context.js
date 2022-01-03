import React from "react";
import useBestRate from "../hooks/use-bestRate";
import useHttp from "../hooks/use-Http";

const DEFAULT_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "x-nesto-candidat": "Alex Gharibi",
};

const LoansContext = React.createContext({
  loans: [],
  rateFix: [],
  rateVariable: [],
});

export const LoansContextProvider = ({ children }) => {
  const { isLoading, error, loans, fetchHandler } = useHttp({
    url: "https://nesto-fe-exam.vercel.app/api/products",
    headers: {
      ...DEFAULT_HEADERS,
    },
  });

  const fixLoans = loans.filter((fix) => fix.type === "FIXED");

  const variableLoans = loans.filter(
    (variable) => variable.type === "VARIABLE"
  );

  const bestRateFixLoan = useBestRate(fixLoans);

  const bestRateVariableLoan = useBestRate(variableLoans);

  return (
    <LoansContext.Provider
      value={{
        loans,
        bestRateFixLoan,
        bestRateVariableLoan,
        isLoading,
        error,
        fetchingdata: fetchHandler,
      }}
    >
      {children}
    </LoansContext.Provider>
  );
};

export default LoansContext;
