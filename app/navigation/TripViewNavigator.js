import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import TripViewScreen from '../screens/trips/TripViewScreen';
import EditTripScreen from '../screens/trips/EditTripScreen';

const AppStack = createStackNavigator();

const TripViewNavigator = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="TripView" component={TripViewScreen} options={{ headerShown: false }} />
    <AppStack.Screen name="EditTrip" component={EditTripScreen} options={{ headerShown: false }} />
  </AppStack.Navigator>
)

export default TripViewNavigator;
