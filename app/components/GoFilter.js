import React from 'react';
import { StyleSheet, View } from 'react-native';

import GoButton from './GoButton';

function GoFilter({ filters, selectedFilter, setFilter }) {
  return (
    <View style={styles.container}>
      {Object.entries(filters).map(([valueLabel, valueIcon]) =>
        <GoButton
          key={valueLabel}
          style={styles.inputValue}
          icon={valueIcon}
          text={valueLabel}
          color={(selectedFilter === valueLabel ? 'white' : 'black')}
          backgroundColor={(selectedFilter === valueLabel ? 'orange' : 'lightgray')}
          onPress={() => {
            setFilter(valueLabel);
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'stretch',
  }
})

export default GoFilter;
