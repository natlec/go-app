import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import GoColors from '../config/GoColors';
import GoFonts from '../config/GoFonts';

function GoCardListItem({ label, value }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
      </Text>
      <Text style={styles.value}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    width: '100%',
    height: 72,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderTopWidth: 2,
    borderTopColor: GoColors.lightgray,
  },
  label: {
    color: GoColors.black,
    fontFamily: GoFonts.semibold,
    fontSize: 16,
    lineHeight: 18,
  },
  value: {
    color: GoColors.gray,
    fontFamily: GoFonts.regular,
    fontSize: 16,
    lineHeight: 18,
  },
  action: {
    padding: 8,
  }
})

export default GoCardListItem;
