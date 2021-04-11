import React from 'react';
import { View, StyleSheet } from 'react-native';

import GoData from '../../config/GoData';
import GoScreen from '../../components/GoScreen';
import GoHeader from '../../components/GoHeader';
import GoButton from '../../components/GoButton';
import GoCard from '../../components/GoCard';

function AccountScreen({ navigation }) {
  const commonData = GoData.getInstance();

  return (
    <GoScreen>
      <View style={styles.container}>
        <GoHeader icon="account-circle" title="Account" />
        <GoCard
          title={commonData.getUser().username}
          subtitle={commonData.getUser().email}
          iconRight="edit"
          onPress={() => navigation.navigate('EditAccount')}
        />
        <GoButton text="Logout" color="white" backgroundColor="orange" onPress={() => {
          commonData.setLoggedIn(false);
          navigation.navigate('Login');
        }} />
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