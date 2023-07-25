import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useForm } from 'react-hook-form';
import uuid from 'react-native-uuid';
import { ScreenNames } from '../../navigation/screenNames';
import Button from '../../components/Button';
import Text from '../../components/Text';
import Input from '../../components/Input';
import FormItem from '../../components/FormItem';
import { colors } from '../../theme/colors';
import { TypographyTypes } from '../../theme/typography';
import Header from '../../components/Header';
import { WalletStackParamList } from '../../navigation/WalletStackNavigator';
import { useAppDispatch } from '../../store';
import { saveContact } from '../../store/addressBook';
import validatePolkadotAddress from '../../utils/validatePolkadotAddress';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray24,
  },
  contentContainer: {
    paddingHorizontal: 24,
    marginTop: 40,
  },
});

interface FormValues {
  name: string;
  address: string;
}

function AddContact({
  navigation,
}: NativeStackScreenProps<WalletStackParamList, ScreenNames.AddContact>) {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
  });

  const onSubmit = (data: FormValues) => {
    dispatch(
      saveContact({
        uuid: uuid.v4() as string,
        ...data,
      })
    );
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header title="Add Contact" />
      <View style={styles.contentContainer}>
        <Text typographyType={TypographyTypes.title2} center paddingTop={40} paddingBottom={8}>
          Add new contact to your address book
        </Text>
        <Text typographyType={TypographyTypes.paragraphRegular} center paddingBottom={40}>
          This will be stored in your address book
        </Text>

        <FormItem name="name" control={control} required>
          <Input placeholder="Name" />
        </FormItem>

        <FormItem
          name="address"
          control={control}
          required
          rules={{ validate: validatePolkadotAddress }}>
          <Input placeholder="Address" noteMessage={'It has to be valid Polkadot address'} />
        </FormItem>
        <Button
          small
          buttonType="primary"
          onPress={handleSubmit(onSubmit)}
          text="Add contact"
          disabled={!isValid}
        />
      </View>
    </View>
  );
}

export default AddContact;
