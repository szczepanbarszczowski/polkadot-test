import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/AuthStackNavigator';
import { ScreenNames } from '../../navigation/screenNames';
import Button from '../../components/Button';
import Text from '../../components/Text';
import Warning from '../../components/icons/Warning';
import SecurityLever from '../../components/SecurityLever';
import DottedList from '../../components/DottedList';
import { colors } from '../../theme/colors';
import { TypographyTypes } from '../../theme/typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray24,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  contentContainer: {
    marginTop: 40,
    flex: 1,
  },
  warningContainer: {
    position: 'absolute',
    right: 0,
    marginTop: 24,
  },
});

function SecureYourWallet({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, ScreenNames.SecureYourWallet>) {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text typographyType={TypographyTypes.title2} center paddingTop={24} paddingBottom={12}>
          Secure Your Wallet
        </Text>
        <View style={styles.warningContainer}>
          <Warning />
        </View>
        <Text
          typographyType={TypographyTypes.paragraphRegular}
          paddingBottom={40}
          color={colors.gray9}>
          Secure your wallet's "
          <Text typographyType={TypographyTypes.paragraphRegular} color={colors.primary5}>
            Seed Phrase
          </Text>
          "
        </Text>
        <Text typographyType={TypographyTypes.paragraphSemiBold} paddingBottom={16}>
          Manual
        </Text>
        <Text typographyType={TypographyTypes.paragraphRegular} paddingBottom={16}>
          Write down your seed phrase on a piece of paper and store in a safe place.
        </Text>

        <SecurityLever lever={3} />

        <DottedList
          title="Riska are:"
          list={['You loose it', 'You forget where you put it', 'Someone else finds it']}
        />

        <Text typographyType={TypographyTypes.paragraphRegular} paddingBottom={16} paddingTop={16}>
          Other options: Doesn't have to be paper!
        </Text>

        <DottedList
          title="Tips:"
          list={['Store in bank vault', 'Store in a safe', 'Store in multiple secret places']}
        />
      </View>
      <Button
        small
        buttonType="primary"
        onPress={() => navigation.navigate(ScreenNames.SeedPhrase)}
        text="Start "
      />
    </View>
  );
}

export default SecureYourWallet;
