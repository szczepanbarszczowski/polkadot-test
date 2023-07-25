import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useForm, useWatch } from 'react-hook-form';
import * as LocalAuthentication from 'expo-local-authentication';
import { AuthStackParamList } from '../../navigation/AuthStackNavigator';
import { ScreenNames } from '../../navigation/screenNames';
import Button from '../../components/Button';
import Text from '../../components/Text';
import Input from '../../components/Input';
import Switch from '../../components/Switch';
import Checkbox from '../../components/Checkbox';
import FormItem from '../../components/FormItem';
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
  },
  faceIdWrapper: {
    marginBottom: 24,
  },
  termsLink: {
    color: colors.primary5,
  },
});

interface FormValues {
  newPassword: string;
  repeatNewPassword: string;
  faceId?: boolean;
  agreement: boolean;
}

function CreatePassword({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, ScreenNames.CreatePassword>) {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
  });
  const value = useWatch({ control, name: 'newPassword' });

  const onSubmit = (data: FormValues) => {
    if (data.faceId) {
      LocalAuthentication.isEnrolledAsync().then((result) => {
        if (!result) {
          alert('Face ID is not enrolled');
          return;
        }

        LocalAuthentication.authenticateAsync().then((result) => {
          if (result.success) {
            navigation.navigate(ScreenNames.SecureYourWallet);
          } else {
            alert('Authentication failed');
          }
        });
      });
    } else {
      navigation.navigate(ScreenNames.SecureYourWallet);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text typographyType={TypographyTypes.title2} center paddingTop={40} paddingBottom={8}>
          Create Password
        </Text>
        <Text typographyType={TypographyTypes.paragraphRegular} center paddingBottom={40}>
          This password will unlock your Metamask wallet only on this service
        </Text>

        <FormItem name="newPassword" control={control} required>
          <Input
            placeholder="New Password"
            noteMessage={
              <Text typographyType={TypographyTypes.captionSmallRegular} color={colors.gray12}>
                Password strength:{' '}
                {value && (
                  <Text typographyType={TypographyTypes.captionSmallRegular} color={colors.green5}>
                    Good
                  </Text>
                )}
              </Text>
            }
            secureTextEntry
          />
        </FormItem>

        <FormItem name="repeatNewPassword" control={control} required>
          <Input
            placeholder="Repeat New Password"
            noteMessage="Must be at least 8 characters"
            secureTextEntry
          />
        </FormItem>

        <View style={styles.faceIdWrapper}>
          <FormItem name="faceId" control={control}>
            <Switch title="Sign in with Face ID" />
          </FormItem>
        </View>

        <FormItem name="agreement" control={control} required>
          <Checkbox
            title={
              <Text typographyType={TypographyTypes.paragraphRegular}>
                I understand that DeGe cannot recover this password for me.{' '}
                <Text
                  typographyType={TypographyTypes.paragraphRegular}
                  style={styles.termsLink}
                  onPress={() => alert('TODO: link to the learn more')}>
                  Learn more
                </Text>
              </Text>
            }
          />
        </FormItem>
      </View>
      <Button
        small
        buttonType="primary"
        onPress={handleSubmit(onSubmit)}
        text="Create Password"
        disabled={!isValid}
      />
    </View>
  );
}

export default CreatePassword;
