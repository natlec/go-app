import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import TripsScreen from '../screens/trips/TripsScreen';
import TripViewNavigator from './TripViewNavigator';

const AppStack = createStackNavigator();

const TripsNavigator = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Trips" component={TripsScreen} options={{ headerShown: false }} />
    <AppStack.Screen name="TripView" component={TripViewNavigator} options={{ headerShown: false }} />
  </AppStack.Navigator>
)

export default TripsNavigator;
