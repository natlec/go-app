import React from 'react';
import { ScrollView, Alert, StyleSheet } from 'react-native';

import GoTrip from '../../config/data/GoTrip';
import GoData from '../../config/GoData';
import GoScreen from '../../components/GoScreen';
import GoCard from '../../components/GoCard';
import GoCardList from '../../components/GoCardList';
import GoButton from '../../components/GoButton';

function TripViewScreen({ navigation }) {
  const commonData = GoData.getInstance();

  const deleteTrip = async (trip) => {
    if (!trip) {
      alert('Error: Failed to delete trip, no trip details provided.');
      return;
    } else {
      const existingTrip = await GoTrip.findBy({ address_eq: trip.address });
      if (!existingTrip) {
        alert('Error: Failed to delete trip, the trip does not exist.');
        navigation.navigate('Trips');
        return;
      } else {
        await GoTrip.destroy(trip.id);
        commonData.setTrips(await GoTrip.query());
        navigation.navigate('Trips');
      }
    }
  };

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
          <GoButton text="Delete Trip" color="black" backgroundColor="lightgray" onPress={() =>
            Alert.alert(
              'Delete Trip',
              'Are you sure you want to delete this trip?', [
              { text: 'Cancel' },
              { text: 'Delete', onPress: () => deleteTrip(commonData.getTripView()) }
            ])} />
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