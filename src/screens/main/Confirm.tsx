import { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Text from '../../components/Text';
import Summary from '../../components/Summary';
import { ScreenNames } from '../../navigation/screenNames';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WalletStackParamList } from '../../navigation/WalletStackNavigator';
import { colors } from '../../theme/colors';
import { useSelector } from 'react-redux';
import {
  clearAddresses,
  clearAmountToSend,
  selectAddressToSend,
  selectAmountToSend,
  selectContactPickedToSend,
} from '../../store/addressBook';
import { useAppDispatch } from '../../store';
import { TypographyTypes } from '../../theme/typography';
import AccountPicker from '../../components/AccountPicker';
import { ContactProfile } from '../../components/AddressBook';
import useApi from '../../hooks/useApi';
import { selectPair } from '../../store/auth';

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
  summary: {
    marginTop: 32,
  },
});

function Confirm({
  navigation,
}: NativeStackScreenProps<WalletStackParamList, ScreenNames.Confirm>) {
  const dispatch = useAppDispatch();
  const [loading, setIsLoading] = useState(false);
  const { api } = useApi();
  const amountToSend = useSelector(selectAmountToSend);
  const contactPicked = useSelector(selectContactPickedToSend);
  const addressProvided = useSelector(selectAddressToSend);
  const pair = useSelector(selectPair);

  const finalAddress = addressProvided
    ? { address: addressProvided, name: 'Anonymous' }
    : contactPicked;

  const handleCrossPress = () => {
    navigation.navigate(ScreenNames.Wallet);
  };

  const handleTransaction = async () => {
    if (!api) return;
    setIsLoading(true);

    await api.tx.balances
      .transfer(finalAddress.address, amountToSend * 1e12)
      .signAndSend(pair, ({ events = [], status, txHash }) => {
        console.log(`Current status is ${status.type}`);

        if (status.isFinalized) {
          console.log(`Transaction included at blockHash ${status.asFinalized}`);
          console.log(`Transaction hash ${txHash.toHex()}`);

          let info = '';
          // Loop through Vec<EventRecord> to display all events
          events.forEach(({ phase, event: { data, method, section } }) => {
            info += `\t' ${phase}: ${section}.${method}:: ${data}`;
          });

          Alert.alert('Transaction processed', info, [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'Show explorer',
              onPress: () =>
                navigation.navigate(ScreenNames.Explorer, {
                  link: `https://westend.subscan.io/extrinsic/${txHash.toHex()}`,
                }),
            },
          ]);
          setIsLoading(false);
          navigation.navigate(ScreenNames.Wallet);
        }
      })
      .catch((error) => {
        alert(`Something went wrong: ${error.message}`);
        console.log('err', error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    return () => {
      dispatch(clearAmountToSend());
      dispatch(clearAddresses());
    };
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Confirm" withCross onCrossPress={handleCrossPress} />
      <View style={styles.contentContainer}>
        <View>
          <Text
            center
            paddingTop={35}
            typographyType={TypographyTypes.paragraphSemiBold}
            color={colors.white}>
            Amount
          </Text>
          <Text center paddingBottom={30} typographyType={TypographyTypes.h3} color={colors.white}>
            {amountToSend || '-'} WND
          </Text>
          <AccountPicker />
          <Text
            paddingBottom={20}
            typographyType={TypographyTypes.paragraphSemiBold}
            color={colors.white}>
            To
          </Text>
          <ContactProfile {...finalAddress} />
          <View style={styles.summary}>
            <Summary amount={amountToSend} totalAmount={amountToSend} networkFee={'0.12'} />
          </View>
        </View>
        <Button
          buttonType="primary"
          text="Send"
          isLoading={loading}
          onPress={() => handleTransaction()}
          style={styles.button}
        />
      </View>
    </View>
  );
}

export default Confirm;
