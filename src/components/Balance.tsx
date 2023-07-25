import { View } from 'react-native';
import Text from './Text';
import { TypographyTypes } from '../theme/typography';
import useExchangeRateCalculator from '../hooks/useExchangeRateCalculator';
import { useMemo } from 'react';

interface BalanceProps {
  balance: string;
}

const Balance = ({ balance }: BalanceProps) => {
  const { calculateExchangeRate } = useExchangeRateCalculator();
  const usdBalance =
    useMemo(() => balance && calculateExchangeRate(Number(balance.split(' ')[0])), [balance]) || 0;

  return (
    <View>
      <Text typographyType={TypographyTypes.h3} paddingTop={60} paddingBottom={40} center>
        {balance}
      </Text>

      <Text typographyType={TypographyTypes.subtitle1} paddingBottom={40} center>
        ${usdBalance.toFixed(2)}
      </Text>
    </View>
  );
};

export default Balance;
