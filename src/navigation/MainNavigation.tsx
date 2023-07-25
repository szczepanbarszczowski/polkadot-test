import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from './AuthStackNavigator';
import WalletStack from './WalletStackNavigator';
import { useSelector } from 'react-redux';
import { selectAuthenticationState } from '../store/auth';
import useApi from '../hooks/useApi';

function MainNavigation() {
  const isAuthenticated = useSelector(selectAuthenticationState);
  useApi();

  return (
    <NavigationContainer>
      {isAuthenticated ? <WalletStack /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}

export default MainNavigation;
