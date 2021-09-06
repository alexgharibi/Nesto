const useBestRate = (loantype) => {
  let y = 100;
  for (let i = 0; i < loantype.length; i++) {
    if (loantype[i].bestRate < y) y = loantype[i].bestRate;
  }

  return y;
};

export default useBestRate;
