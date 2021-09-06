import React, { useState } from "react";
import useBestRate from "../hooks/use-bestRate";

const LoansContext = React.createContext({
  loans: [],
  rateFix: () => [],
  rateVariable: () => [],
});

export const LoansContextProvider = (props) => {
  const [loans, setLoans] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const DEFAULT_HEADERS = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "x-nesto-candidat": "Alex Gharibi",
  };

  async function fetchHandler() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://nesto-fe-exam.vercel.app/api/products",
        {
          headers: {
            ...DEFAULT_HEADERS,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Cannot Connect to the Server");
      }
      const data = await response.json();
      setLoans(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

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
        loans: loans,
        rateFix: rateFix,
        rateVariable: rateVariable,
        isLoading: isLoading,
        error: error,
        fetchingdata: fetchHandler,
      }}
    >
      {props.children}
    </LoansContext.Provider>
  );
};

export default LoansContext;
