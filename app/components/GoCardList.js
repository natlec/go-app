import React from 'react';
import { StyleSheet, View } from 'react-native';

import GoCardListItem from './GoCardListItem';

function GoCardList({ items }) {
  return (
    <View style={styles.container}>
      {items.map((item, idx) =>
        <GoCardListItem key={idx} label={item.label} value={item.value} action={item.action} />
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
