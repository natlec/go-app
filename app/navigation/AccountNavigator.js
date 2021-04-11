import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import AccountScreen from '../screens/account/AccountScreen';
import EditAccountScreen from '../screens/account/EditAccountScreen';

const AppStack = createStackNavigator();

const AccountNavigator = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Account" component={AccountScreen} options={{ headerShown: false }} />
    <AppStack.Screen name="EditAccount" component={EditAccountScreen} options={{ headerShown: false }} />
  </AppStack.Navigator>
)

export default AccountNavigator;
