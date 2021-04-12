import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import GoData from '../../config/GoData';
import GoScreen from '../../components/GoScreen';
import GoCard from '../../components/GoCard';
import GoCardList from '../../components/GoCardList';
import GoButton from '../../components/GoButton';

function TripViewScreen({ navigation }) {
  const commonData = GoData.getInstance();

  return (
    <GoScreen>
      <ScrollView keyboardShouldPersistTaps="always" contentContainerStyle={styles.container}>
        <GoCard
          title={commonData.getTripView().name}
          subtitle={commonData.getTripView().address}
          iconLeft="arrow-back-ios"
          onPress={() => navigation.goBack()}
        >
          <GoCardList
            items={[
              { label: 'Category', value: commonData.getTripView().category },
              { label: 'Cost', value: commonData.getTripView().cost },
              { label: 'WiFi Password', value: commonData.getTripView().wifiPassword },
              { label: 'Website', value: commonData.getTripView().website },
              { label: 'Email', value: commonData.getTripView().email },
              { label: 'Phone', value: commonData.getTripView().phone }
            ]}
          />
          <GoButton text="Edit Trip" color="black" backgroundColor="lightgray" onPress={() => navigation.navigate('EditTrip')} />
        </GoCard>
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

export default TripViewScreen;