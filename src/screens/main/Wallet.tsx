import { StyleSheet, View } from 'react-native';
import { ScreenNames } from '../../navigation/screenNames';
import Balance from '../../components/Balance';
import Button from '../../components/Button';
import { colors } from '../../theme/colors';
import useBalance from '../../hooks/useBalance';
import SendIcon from '../../components/icons/Send';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WalletStackParamList } from '../../navigation/WalletStackNavigator';
import { useSelector } from 'react-redux';
import { selectPair } from '../../store/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray24,
    paddingBottom: 42,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  button: {
    width: 100,
  },
  explorerButton: {
    width: 100,
    paddingTop: 16,
  },
});

function Wallet({ navigation }: NativeStackScreenProps<WalletStackParamList, ScreenNames.Wallet>) {
  const balance = useBalance();
  const pair = useSelector(selectPair);

  return (
    <View style={styles.container}>
      <Balance balance={balance || '0 WND'} />
      <Button
        buttonType="secondary"
        LeftIcon={SendIcon}
        text="Send"
        style={styles.button}
        onPress={() => navigation.navigate(ScreenNames.SendTo)}
      />
      <Button
        buttonType="secondary"
        text="Explorer"
        style={styles.explorerButton}
        onPress={() =>
          navigation.navigate(ScreenNames.Explorer, {
            link: `https://westend.subscan.io/account/${pair.address}`,
          })
        }
      />
    </View>
  );
}

export default Wallet;
