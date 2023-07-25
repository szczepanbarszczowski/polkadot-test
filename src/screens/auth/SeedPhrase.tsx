import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { mnemonicGenerate } from '@polkadot/util-crypto';
import { useSelector } from 'react-redux';
import { AuthStackParamList } from '../../navigation/AuthStackNavigator';
import { ScreenNames } from '../../navigation/screenNames';
import SeedPhrases from '../../components/SeedPhrases';
import Button from '../../components/Button';
import Text from '../../components/Text';
import { colors } from '../../theme/colors';
import { TypographyTypes } from '../../theme/typography';
import { useAppDispatch } from '../../store';
import { clearMnemonic, selectMnemonic, setMnemonic } from '../../store/auth';

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

function SeedPhrase({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, ScreenNames.SeedPhrase>) {
  const dispatch = useAppDispatch();
  const mnemonic = useSelector(selectMnemonic) || [];

  useEffect(() => {
    dispatch(setMnemonic({ mnemonic: mnemonicGenerate() }));

    return () => {
      dispatch(clearMnemonic(null));
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text typographyType={TypographyTypes.title2} center paddingTop={24} paddingBottom={12}>
          Write Down Your Seed Phrase
        </Text>
        <Text
          typographyType={TypographyTypes.paragraphRegular}
          paddingBottom={40}
          color={colors.gray9}>
          This is your seed phrase. Write it down on a paper and keep it in a safe place. You'll be
          asked to re-enter this phrase (in order) on the next step.
        </Text>
        <SeedPhrases phrases={mnemonic} />
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

export default SeedPhrase;
