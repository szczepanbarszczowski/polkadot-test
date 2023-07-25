import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Text from '../../components/Text';
import { ScreenNames } from '../../navigation/screenNames';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WalletStackParamList } from '../../navigation/WalletStackNavigator';
import { colors } from '../../theme/colors';
import { useSelector } from 'react-redux';
import { clearAmountToSend, selectAmountToSend, setAmountToSend } from '../../store/addressBook';
import { useAppDispatch } from '../../store';
import { useEffect } from 'react';
import useBalance from '../../hooks/useBalance';
import { typography, TypographyTypes } from '../../theme/typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray24,
  },
  contentContainer: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flex: 1,
  },
  button: {
    marginBottom: 30,
  },
  inputContainer: {
    alignItems: 'center',
    paddingTop: 50,
  },
  input: {
    ...typography[TypographyTypes.h3],
    color: colors.white,
  },
  useMaxButton: {
    position: 'absolute',
    right: 0,
    top: 55,
  },
});

function SendTo({ navigation }: NativeStackScreenProps<WalletStackParamList, ScreenNames.SendTo>) {
  const dispatch = useAppDispatch();
  const amountToSend = useSelector(selectAmountToSend);
  const balance = useBalance();
  const balanceWithoutCurrency = balance?.split(' ')[0];

  const handleCrossPress = () => {
    navigation.navigate(ScreenNames.Wallet);
  };

  const handleInputChange = (value: string) => {
    dispatch(setAmountToSend(value));
  };

  const handleUseMax = () => {
    balance && dispatch(setAmountToSend(balance.split(' ')[0]));
  };

  useEffect(() => {
    return () => {
      dispatch(clearAmountToSend());
    };
  }, []);

  useEffect(() => {
    if (amountToSend && balanceWithoutCurrency) {
      if (amountToSend > balanceWithoutCurrency) {
        dispatch(setAmountToSend(balanceWithoutCurrency));
      }
    }
  }, [amountToSend, balanceWithoutCurrency]);

  return (
    <View style={styles.container}>
      <Header title="Amount" withCross onCrossPress={handleCrossPress} />
      <View style={styles.contentContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Amount"
            onChangeText={handleInputChange}
            value={amountToSend}
            keyboardType="numeric"
            style={styles.input}
          />
          <Pressable style={styles.useMaxButton} onPress={handleUseMax}>
            <View>
              <Text
                paddingTop={20}
                typographyType={TypographyTypes.paragraphSemiBold}
                color={colors.blue3}>
                Use max
              </Text>
            </View>
          </Pressable>
          <Text
            paddingTop={20}
            typographyType={TypographyTypes.captionLargeRegular}
            color={colors.gray4}>
            {balance}
          </Text>
        </View>
        <Button
          disabled={!amountToSend}
          buttonType="primary"
          text="Next"
          onPress={() => navigation.navigate(ScreenNames.Confirm)}
          style={styles.button}
        />
      </View>
    </View>
  );
}

export default SendTo;
