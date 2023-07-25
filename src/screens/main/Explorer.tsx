import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WebView } from 'react-native-webview';
import { ScreenNames } from '../../navigation/screenNames';
import { colors } from '../../theme/colors';
import Header from '../../components/Header';
import { WalletStackParamList } from '../../navigation/WalletStackNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray24,
  },
  contentContainer: {
    paddingHorizontal: 24,
  },
});

function AddContact({ route }: NativeStackScreenProps<WalletStackParamList, ScreenNames.Explorer>) {
  const { link } = route.params;

  return (
    <View style={styles.container}>
      <Header title="Explorer" />
      <WebView style={styles.contentContainer} source={{ uri: link }} />
    </View>
  );
}

export default AddContact;
