import React, { useState, useCallback } from 'react';
import { RefreshControl, Text, View, ScrollView, StyleSheet } from 'react-native';

import GoTrip from '../../config/data/GoTrip';
import GoData from '../../config/GoData';
import GoScreen from '../../components/GoScreen';
import GoHeader from '../../components/GoHeader';
import GoCard from '../../components/GoCard';

function TripsScreen({ navigation }) {
  const commonData = GoData.getInstance();
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    commonData.setTrips(await GoTrip.query());
    setRefreshing(false);
  }, []);

  return (
    <GoScreen>
      <ScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={styles.container}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <GoHeader icon="explore" title="Trips" />

        {commonData.getTrips().map(trip =>
          <GoCard
            key={trip.id}
            title={trip.name}
            subtitle={trip.address}
            iconRight="arrow-forward-ios"
            tags={[
              { icon: commonData.getCategory(trip.category) },
              { label: commonData.getCost(trip.cost) },
              { icon: 'wifi' }
            ]}
            onPress={() => {
              commonData.setTripView(trip);
              navigation.navigate('TripView');
            }}
          />)}

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

export default TripsScreen;