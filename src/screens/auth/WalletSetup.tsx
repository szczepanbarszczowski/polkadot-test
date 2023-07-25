import { Image, StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/AuthStackNavigator';
import { ScreenNames } from '../../navigation/screenNames';
import Button from '../../components/Button';
import Text from '../../components/Text';
import { colors } from '../../theme/colors';
import { TypographyTypes } from '../../theme/typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray24,
    justifyContent: 'space-between',
    paddingBottom: 42,
    paddingHorizontal: 24,
  },
  image: {
    width: 295,
    height: 295,
    marginTop: 158,
    alignSelf: 'center',
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    lineHeight: 56,
  },
  buttonsContainer: {
    gap: 16,
  },
});

function WalletSetup({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, ScreenNames.WalletSetup>) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../images/wallet-setup.png')} />
      <Text typographyType={TypographyTypes.h5} style={styles.text}>
        Wallet Setup
      </Text>
      <View style={styles.buttonsContainer}>
        <Button
          buttonType="secondary"
          onPress={() => navigation.navigate(ScreenNames.ImportFromSeed)}
          text="Import Using Seed Phrase"
        />
        <Button
          buttonType="primary"
          onPress={() => navigation.navigate(ScreenNames.CreatePassword)}
          text="Create a New Wallet"
        />
      </View>
    </View>
  );
}

export default WalletSetup;
