import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import GoColors from '../../config/GoColors';
import GoButton from '../../components/GoButton';
import GoScreen from '../../components/GoScreen';

function RegisterScreen({ navigation }) {
  return (
    <GoScreen>
      <View style={styles.container}>
        <Text style={styles.text}>Register Screen</Text>
        <GoButton text="View Trips" onPress={() => navigation.navigate('Trips')} />
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

export default RegisterScreen;