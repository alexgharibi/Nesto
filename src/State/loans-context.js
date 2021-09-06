import React, { useState } from "react";

const LoansContext = React.createContext({
  loans: [],
  rateFix: () => [],
  rateVariable: () => [],
});

export const LoansContextProvider = (props) => {
  const [loans, setLoans] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /*Fetching*/

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

  /*Filtering products*/

  const fix = loans.filter((fix) => {
    return fix.type === "FIXED";
  });

  const rateFix = function bestRateFix(y) {
    for (let i = 0; i < fix.length; i++) {
      if (fix[i].bestRate < y) y = fix[i].bestRate;
    }
    return y;
  };
  const variable = loans.filter((variable) => {
    return variable.type === "VARIABLE";
  });

  const rateVariable = function bestRateVariable(y) {
    for (let i = 0; i < variable.length; i++) {
      if (variable[i].bestRate < y) y = variable[i].bestRate;
    }
    return y;
  };

  return (
    <LoansContext.Provider
      value={{
        loans: loans,
        rateFix: rateFix(100),
        rateVariable: rateVariable(100),
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
