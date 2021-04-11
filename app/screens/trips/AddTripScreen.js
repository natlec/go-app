import React from 'react';
import { View, StyleSheet } from 'react-native';

import GoScreen from '../../components/GoScreen';
import GoHeader from '../../components/GoHeader';
import GoButton from '../../components/GoButton';

function AddTripScreen({ navigation }) {
  return (
    <GoScreen>
      <View style={styles.container}>
        <GoHeader icon="add-circle" title="Add Trip" />
        <GoButton text="View Trips" onPress={() => navigation.navigate('Trips')} />
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

export default AddTripScreen;