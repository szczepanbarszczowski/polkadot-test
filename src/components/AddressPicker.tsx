import { useSelector } from 'react-redux';
import { useTruncateFromMiddle } from '../hooks/useTruncateFromMiddle';
import { Pressable, StyleSheet, View } from 'react-native';
import CrossIcon from './icons/Cross';
import Text from './Text';
import { TypographyTypes } from '../theme/typography';
import Profile from './icons/Profile';
import { useAppDispatch } from '../store';
import Input from './Input';
import {
  removePickedContact,
  selectAddressToSend,
  selectContactPickedToSend,
  setAddressToSend,
} from '../store/addressBook';
import validatePolkadotAddress from '../utils/validatePolkadotAddress';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
  },
  removePickButton: {
    position: 'absolute',
    right: 0,
  },
});

const AddressPicker = () => {
  const dispatch = useAppDispatch();
  const contactPicked = useSelector(selectContactPickedToSend);
  const addressProvided = useSelector(selectAddressToSend);
  const addr = useTruncateFromMiddle({
    fullStr: contactPicked?.address || '',
    strLen: 10,
  });
  const addressValid = validatePolkadotAddress(addressProvided);

  const handeRemovePick = () => {
    dispatch(removePickedContact());
  };

  const handleInputChange = (value: string) => {
    dispatch(setAddressToSend(value));
  };

  return (
    <View>
      <Text
        paddingTop={20}
        paddingBottom={20}
        typographyType={TypographyTypes.captionLargeSemiBold}>
        To
      </Text>
      <View style={styles.container}>
        {contactPicked ? (
          <>
            <Profile />
            <View>
              <Text typographyType={TypographyTypes.title1}>{contactPicked.name}</Text>
              <Text typographyType={TypographyTypes.captionLargeSemiBold} paddingBottom={10}>
                {addr}
              </Text>
            </View>
            <Pressable onPress={handeRemovePick} style={styles.removePickButton}>
              <CrossIcon />
            </Pressable>
          </>
        ) : (
          <View style={{ width: '100%' }}>
            <Input
              placeholder="Polkadot address"
              onChange={handleInputChange}
              value={addressProvided}
              errorMessage={!addressValid ? 'Invalid address' : undefined}
              error={addressProvided && !addressValid}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default AddressPicker;
