import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import GoColors from '../config/GoColors';
import GoFonts from '../config/GoFonts';

function GoCardListItem({ label, value, action }) {
  return (
    <View style={styles.container}>
      {label &&
        <Text style={styles.label}>
          {label}
        </Text>}
      <View style={styles.valueContainer}>
        {value &&
          <Text style={styles.value}>
            {value}
          </Text>}
        {action &&
          <TouchableOpacity style={styles.action} onPress={action.onPress}>
            <MaterialIcons
              style={styles.actionIcon}
              name={action.icon}
              size={18}
              color={GoColors.gray} />
          </TouchableOpacity>}
      </View>
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
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
