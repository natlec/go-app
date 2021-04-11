import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import GoTabBar from '../components/GoTabBar';
import TripsNavigator from './TripsNavigator';
import AccountNavigator from './AccountNavigator';
import AddTripScreen from '../screens/trips/AddTripScreen';

const AppTab = createBottomTabNavigator();

const TabNavigator = () => (
  <AppTab.Navigator tabBar={props => <GoTabBar {...props} />}>
    <AppTab.Screen name="Trips" component={TripsNavigator} options={{
      tabBarLabel: 'Trips',
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name="explore" size={24} color={tintColor} />)
    }} />
    <AppTab.Screen name="AddTrip" component={AddTripScreen} options={{
      tabBarLabel: 'Add Trip',
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name="add-circle" size={24} color={tintColor} />
      )
    }} />
    <AppTab.Screen name="Account" component={AccountNavigator} options={{
      tabBarLabel: 'Account',
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name="account-circle" size={24} color={tintColor} />)
    }} />
  </AppTab.Navigator>
)

export default TabNavigator;
