import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import TabNavigator from './TabNavigator';

const AppStack = createStackNavigator();

const AuthNavigator = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    <AppStack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
    <AppStack.Screen name="Trips" component={TabNavigator} options={{ headerShown: false }} />
  </AppStack.Navigator>
)

export default AuthNavigator;
