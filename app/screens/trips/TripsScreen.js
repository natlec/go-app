import React, { useState, useCallback } from 'react';
import { RefreshControl, Text, ScrollView, StyleSheet } from 'react-native';

import GoTrip from '../../config/data/GoTrip';
import GoData from '../../config/GoData';
import GoColors from '../../config/GoColors';
import GoFonts from '../../config/GoFonts';
import GoScreen from '../../components/GoScreen';
import GoHeader from '../../components/GoHeader';
import GoCard from '../../components/GoCard';
import GoFilter from '../../components/GoFilter';

function TripsScreen({ navigation }) {
  const commonData = GoData.getInstance();
  const [categoryFilter, setCategoryFilter] = useState(Object.keys(commonData.getCategories())[0]);
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

        {/* Categories available for filtering */}
        {(commonData.getTrips().filter(trip => trip.creator === commonData.getUser().username).length > 0)
          ? <GoFilter filters={commonData.getCategories()} selectedFilter={categoryFilter} setFilter={setCategoryFilter} />
          : <Text style={styles.statusText}>No trips in your account, try adding some!</Text>}

        {/* List of trips filtered by selected category */}
        {commonData
          .getTrips()
          .filter(trip => trip.category === categoryFilter && trip.creator === commonData.getUser().username)
          .map(trip =>
            <GoCard
              key={trip.id}
              title={trip.name}
              subtitle={trip.address}
              iconRight="arrow-forward-ios"
              tags={[
                { icon: commonData.getCategory(trip.category), label: trip.category }
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
  },
  statusText: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily: GoFonts.semibold,
    fontSize: 14,
    color: GoColors.lightgray,
    margin: 48,
  }
})

export default TripsScreen;