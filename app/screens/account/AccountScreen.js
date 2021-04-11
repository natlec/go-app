import React from 'react';
import { View, StyleSheet } from 'react-native';

import GoScreen from '../../components/GoScreen';
import GoHeader from '../../components/GoHeader';
import GoButton from '../../components/GoButton';

function AccountScreen({ navigation }) {
  return (
    <GoScreen>
      <View style={styles.container}>
        <GoHeader icon="account-circle" title="Account" />
        <GoButton text="Logout" color="white" backgroundColor="orange" onPress={() => navigation.navigate('Login')} />
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

export default AccountScreen;