import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SendTo from '../screens/main/SendTo';
import Confirm from '../screens/main/Confirm';
import Amount from '../screens/main/Amount';
import AddContact from '../screens/main/AddContact';
import TabBarNavigator from './BottomTabNavigator';
import Explorer from '../screens/main/Explorer';
import { ScreenNames } from './screenNames';

export type WalletStackParamList = {
  Wallet: undefined;
  Settings: undefined;
  TabNavigator: undefined;
  SendTo: undefined;
  Amount: undefined;
  Confirm: undefined;
  AddContact: undefined;
  Explorer: {
    link: string;
  };
};

const Stack = createNativeStackNavigator<WalletStackParamList>();

function WalletStackNavigator() {
  return (
    <Stack.Navigator initialRouteName={ScreenNames.TabNavigator}>
      <Stack.Screen
        name={ScreenNames.TabNavigator}
        component={TabBarNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name={ScreenNames.SendTo}
          component={SendTo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ScreenNames.Amount}
          component={Amount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ScreenNames.Confirm}
          component={Confirm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ScreenNames.AddContact}
          component={AddContact}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ScreenNames.Explorer}
          component={Explorer}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default WalletStackNavigator;
