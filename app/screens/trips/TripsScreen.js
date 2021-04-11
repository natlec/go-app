import React from 'react';
import { View, StyleSheet } from 'react-native';

import GoScreen from '../../components/GoScreen';
import GoHeader from '../../components/GoHeader';
import GoButton from '../../components/GoButton';

function TripsScreen({ navigation }) {
  return (
    <GoScreen>
      <View style={styles.container}>
        <GoHeader icon="explore" title="Trips" />
        <GoButton text="View Trips" onPress={() => navigation.navigate('TripView')} />
      </View>
    </GoScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default TripsScreen;