import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import GoData from '../../config/GoData';
import GoScreen from '../../components/GoScreen';
import GoHeader from '../../components/GoHeader';
import GoButton from '../../components/GoButton';
import GoCard from '../../components/GoCard';

function AccountScreen({ navigation }) {
  const commonData = GoData.getInstance();

  return (
    <GoScreen>
      <ScrollView keyboardShouldPersistTaps="always" contentContainerStyle={styles.container}>
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
      </ScrollView>
    </GoScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 96,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default AccountScreen;