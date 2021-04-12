import React from 'react';
import { StyleSheet, View } from 'react-native';

import GoCardListItem from './GoCardListItem';

function GoCardList({ items }) {
  return (
    <View style={styles.container}>
      {items.filter(item => item !== undefined).map((item, idx) =>
        <GoCardListItem key={idx} label={item.label} value={item.value} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  }
})

export default GoCardList;
