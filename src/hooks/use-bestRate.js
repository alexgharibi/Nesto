const useBestRate = (loantype) => {
  const bestRate = loantype.reduce((best, loan) => {
    return best < loan.bestRate ? best : loan.bestRate;
  }, loan[0].bestRate);
  return bestRate;
};

export default useBestRate;
