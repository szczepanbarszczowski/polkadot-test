import * as React from 'react';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/auth/Welcome';
import WalletSetup from '../screens/auth/WalletSetup';
import SeedPhrase from '../screens/auth/SeedPhrase';
import SuccessSeedPhrase from '../screens/auth/SuccessSeedPhrase';
import SecureYourWallet from '../screens/auth/SecureYourWallet';
import CreatePassword from '../screens/auth/CreatePassword';
import ImportFromSeed from '../screens/auth/ImportFromSeed';
import ConfirmSeedPhrase from '../screens/auth/ConfirmSeedPhrase';
import ArrowLeft from '../components/icons/ArrowLeft';
import { ScreenNames } from './screenNames';
import { colors } from '../theme/colors';
import Header from '../components/Header';

export type AuthStackParamList = {
  Welcome: undefined;
  WalletSetup: undefined;
  SeedPhrase: undefined;
  SuccessSeedPhrase: undefined;
  SecureYourWallet: undefined;
  CreatePassword: undefined;
  ImportFromSeed: undefined;
  ConfirmSeedPhrase: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

function AuthStackNavigator() {
  const { goBack } = useNavigation();
  return (
    <Stack.Navigator initialRouteName={ScreenNames.Welcome}>
      <Stack.Screen
        name={ScreenNames.Welcome}
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ScreenNames.WalletSetup}
        component={WalletSetup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ScreenNames.SeedPhrase}
        component={SeedPhrase}
        options={{
          header: () => <Header title="Seed phrase" step={2} />,
        }}
      />
      <Stack.Screen
        name={ScreenNames.SuccessSeedPhrase}
        component={SuccessSeedPhrase}
        options={{
          header: () => <Header title="Confirm Seed Phrase" step={3} />,
        }}
      />
      <Stack.Screen
        name={ScreenNames.SecureYourWallet}
        component={SecureYourWallet}
        options={{
          header: () => <Header title="Secure your wallet" step={2} />,
        }}
      />
      <Stack.Screen
        name={ScreenNames.CreatePassword}
        component={CreatePassword}
        options={{
          header: () => <Header title="Create Password" step={1} />,
        }}
      />
      <Stack.Screen
        name={ScreenNames.ImportFromSeed}
        component={ImportFromSeed}
        options={{
          title: 'Import From Seed',
          headerLeft: () => (
            <Pressable onPress={() => goBack()}>
              <ArrowLeft />
            </Pressable>
          ),
          headerStyle: {
            backgroundColor: colors.gray24,
          },
          headerTitleStyle: {
            color: colors.white,
          },
        }}
      />
      <Stack.Screen
        name={ScreenNames.ConfirmSeedPhrase}
        component={ConfirmSeedPhrase}
        options={{
          header: () => <Header title="Confirm Seed Phrase" step={3} />,
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthStackNavigator;
