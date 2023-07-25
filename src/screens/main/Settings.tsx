import { StyleSheet, View } from 'react-native';
import Text from '../../components/Text';
import AccountPicker from '../../components/AccountPicker';
import Button from '../../components/Button';
import { useAppDispatch } from '../../store';
import { colors } from '../../theme/colors';
import { TypographyTypes } from '../../theme/typography';
import { logout as logoutAddressBook } from '../../store/addressBook';
import { logout as logoutAuth } from '../../store/auth';
import { logout as logoutApi } from '../../store/api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray24,
    paddingBottom: 42,
    paddingHorizontal: 24,
  },
  button: {
    paddingTop: 30,
  },
});

function Settings() {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logoutAddressBook());
    dispatch(logoutAuth());
    dispatch(logoutApi());
  };

  return (
    <View style={styles.container}>
      <Text paddingTop={50} paddingBottom={30} typographyType={TypographyTypes.h3} center>
        Settings
      </Text>
      <AccountPicker withoutFrom />
      <Button
        text="Remove all account data and logout"
        buttonType="secondary"
        style={styles.button}
        onPress={handleLogout}
      />
    </View>
  );
}

export default Settings;
