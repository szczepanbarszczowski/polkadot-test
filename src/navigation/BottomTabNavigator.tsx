import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Wallet from '../screens/main/Wallet';
import Settings from '../screens/main/Settings';
import TabBar from './TabBar';
import { ScreenNames } from './screenNames';

export type BottomTabNavigatorParamList = {
  Wallet: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

function BottomTabNavigator() {
  return (
    <Tab.Navigator tabBar={TabBar}>
      <Tab.Screen
        name={ScreenNames.Wallet}
        component={Wallet}
        options={{
          headerShown: false,
          title: 'Wallet',
        }}
      />
      <Tab.Screen
        name={ScreenNames.Settings}
        component={Settings}
        options={{
          headerShown: false,
          title: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
