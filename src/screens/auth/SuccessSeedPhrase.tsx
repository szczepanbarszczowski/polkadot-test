import { Image, StyleSheet, View } from 'react-native';
import { Keyring } from '@polkadot/keyring';
import { useAppDispatch } from '../../store';
import { selectMnemonic, setKeyring, setPair } from '../../store/auth';
import Button from '../../components/Button';
import Text from '../../components/Text';
import { colors } from '../../theme/colors';
import { TypographyTypes } from '../../theme/typography';
import { useSelector } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray24,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  contentContainer: {
    marginTop: 24,
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 295,
    height: 295,
  },
  title: {
    fontSize: 40,
  },
});

function SuccessSeedPhrase() {
  const dispatch = useAppDispatch();
  const mnemonic = useSelector(selectMnemonic);

  const handleNext = () => {
    const keyring = new Keyring();
    const pair = keyring.addFromUri(mnemonic.join(' '));

    dispatch(setPair({ pair }));
    dispatch(setKeyring({ keyring }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image style={styles.image} source={require('../../images/wallet-created.png')} />
        <Text
          typographyType={TypographyTypes.h5}
          center
          paddingTop={24}
          paddingBottom={24}
          style={styles.title}>
          Success!
        </Text>
        <Text typographyType={TypographyTypes.paragraphRegular} paddingBottom={40} center>
          You've successfully protected your wallet. Remember to keep your seed phrase safe, it's
          your responsibility!
        </Text>
      </View>
      <Button small buttonType="primary" onPress={handleNext} text="Next " />
    </View>
  );
}

export default SuccessSeedPhrase;
