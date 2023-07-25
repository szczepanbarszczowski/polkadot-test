import { useEffect, useState } from 'react';

const useExchangeRateCalculator = () => {
  const [exchangeRate, setExchangeRate] = useState(0);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=polkadot&vs_currencies=usd')
      .then((response) => response.json())
      .then((json) => {
        setExchangeRate(json.polkadot.usd);
      });
  }, []);

  const calculateExchangeRate = (amount: number) => {
    return amount * exchangeRate;
  };

  return {
    exchangeRate,
    calculateExchangeRate,
  };
};

export default useExchangeRateCalculator;
