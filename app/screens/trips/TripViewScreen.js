import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import GoColors from '../../config/GoColors';
import GoButton from '../../components/GoButton';
import GoScreen from '../../components/GoScreen';

function TripViewScreen({ navigation }) {
  return (
    <GoScreen>
      <View style={styles.container}>
        <Text style={styles.text}>Trip View Screen</Text>
        <GoButton text="View Trips" onPress={() => navigation.navigate('Account')} />
      </View>
    </GoScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: GoColors.white
  }
})

export default TripViewScreen;