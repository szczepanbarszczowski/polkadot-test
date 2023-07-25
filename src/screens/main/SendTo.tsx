import { StyleSheet, View } from 'react-native';
import Header from '../../components/Header';
import Button from '../../components/Button';
import AccountPicker from '../../components/AccountPicker';
import AddressPicker from '../../components/AddressPicker';
import AddressBook from '../../components/AddressBook';
import { ScreenNames } from '../../navigation/screenNames';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WalletStackParamList } from '../../navigation/WalletStackNavigator';
import { colors } from '../../theme/colors';
import { useSelector } from 'react-redux';
import {
  clearAddresses,
  selectAddressToSend,
  selectContactPickedToSend,
} from '../../store/addressBook';
import validatePolkadotAddress from '../../utils/validatePolkadotAddress';
import { useAppDispatch } from '../../store';
import { useEffect } from 'react';

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
});

function SendTo({ navigation }: NativeStackScreenProps<WalletStackParamList, ScreenNames.SendTo>) {
  const dispatch = useAppDispatch();
  const contactPicked = useSelector(selectContactPickedToSend);
  const addressProvided = useSelector(selectAddressToSend);
  const addressValid = validatePolkadotAddress(addressProvided);

  const handleCrossPress = () => {
    navigation.navigate(ScreenNames.Wallet);
  };

  useEffect(() => {
    return () => {
      dispatch(clearAddresses());
    };
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Send to" withCross onCrossPress={handleCrossPress} />
      <View style={styles.contentContainer}>
        <View>
          <AccountPicker />
          <AddressPicker />
          <AddressBook onAdd={() => navigation.navigate(ScreenNames.AddContact)} />
        </View>
        <Button
          disabled={!contactPicked && !addressValid}
          buttonType="primary"
          text="Next"
          onPress={() => navigation.navigate(ScreenNames.Amount)}
          style={styles.button}
        />
      </View>
    </View>
  );
}

export default SendTo;
