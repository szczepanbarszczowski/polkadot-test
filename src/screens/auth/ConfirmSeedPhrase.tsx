import { StyleSheet, View } from 'react-native';
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
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  contentContainer: {
    marginTop: 40,
    flex: 1,
  },
});

function ConfirmSeedPhrase({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, ScreenNames.ConfirmSeedPhrase>) {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text typographyType={TypographyTypes.title2} center paddingTop={24} paddingBottom={12}>
          Confirm Seed Phrase
        </Text>
        <Text typographyType={TypographyTypes.paragraphRegular} paddingBottom={40}>
          Select each word in the order it was presented to you
        </Text>
      </View>
      <Button
        small
        buttonType="primary"
        onPress={() => navigation.navigate(ScreenNames.SuccessSeedPhrase)}
        text="Next "
      />
    </View>
  );
}

export default ConfirmSeedPhrase;
