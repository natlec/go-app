import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts, WorkSans_400Regular, WorkSans_600SemiBold, WorkSans_700Bold } from '@expo-google-fonts/work-sans';
import { NavigationContainer } from '@react-navigation/native';

import GoColors from './app/config/GoColors';
import AuthNavigator from './app/navigation/AuthNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    WorkSans_600SemiBold,
    WorkSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GoColors.black,
  },
})
