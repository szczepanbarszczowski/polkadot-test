import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/AuthStackNavigator';
import { ScreenNames } from '../../navigation/screenNames';
import Button from '../../components/Button';
import Text from '../../components/Text';
import Input from '../../components/Input';
import Switch from '../../components/Switch';
import { colors } from '../../theme/colors';
import { TypographyTypes } from '../../theme/typography';
import { Keyring } from '@polkadot/keyring';
import { setKeyring, setPair } from '../../store/auth';
import { useForm } from 'react-hook-form';
import FormItem from '../../components/FormItem';
import { useAppDispatch } from '../../store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray24,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  contentContainer: {
    marginTop: 40,
  },
  faceIdWrapper: {
    marginBottom: 24,
  },
  termsLink: {
    color: colors.primary5,
  },
});

interface FormValues {
  mnemonic: string;
  password: string;
  confirmPassword: string;
}

function ImportFromSeed() {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
  });

  const onSubmit = ({ mnemonic }: FormValues) => {
    const keyring = new Keyring();
    const pair = keyring.addFromUri(mnemonic);

    dispatch(setPair({ pair }));
    dispatch(setKeyring({ keyring }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <FormItem name="mnemonic" control={control} required>
          <Input
            placeholder="Seed Phrase"
            secureTextEntry
            // multiline
            // numberOfLines={4}
          />
        </FormItem>

        <FormItem name="password" control={control} required>
          <Input
            placeholder="Password"
            noteMessage="Must be at least 8 characters"
            secureTextEntry
          />
        </FormItem>

        <FormItem name="confirmPassword" control={control} required>
          <Input placeholder="Confirm Password" secureTextEntry />
        </FormItem>

        <View style={styles.faceIdWrapper}>
          <Switch title="Sign in with Face ID" />
        </View>

        <Text typographyType={TypographyTypes.paragraphRegular}>
          By proceeding, you agree to these{' '}
          <Text
            typographyType={TypographyTypes.paragraphRegular}
            style={styles.termsLink}
            onPress={() => alert('TODO: link to the t&c')}>
            Terms and conditions
          </Text>
        </Text>
      </View>
      <Button
        disabled={!isValid}
        small
        buttonType="primary"
        onPress={handleSubmit(onSubmit)}
        text="Import"
      />
    </View>
  );
}

export default ImportFromSeed;
// typical cushion dinosaur select siege cash whisper mouse donkey glue annual time
