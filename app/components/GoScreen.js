import React from 'react';
import { SafeAreaView, ScrollView, ImageBackground, StyleSheet } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';

import GoColors from '../config/GoColors';

function GoScreen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <ImageBackground
        source={require('../assets/topo-background.png')}
        style={styles.background}>
        {children}
      </ImageBackground>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: GoColors.black
  },
  background: {
    flex: 1,
    alignItems: 'stretch',
  }
})

export default GoScreen;
