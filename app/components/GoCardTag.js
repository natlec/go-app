import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import GoColors from '../config/GoColors';
import GoFonts from '../config/GoFonts';

function GoCardTag({ label, icon }) {
  return (
    <View style={styles.container}>
      {icon &&
        <MaterialIcons
          style={styles.tagIcon}
          name={icon}
          size={icon.size ? icon.size : 16}
          color={GoColors.gray} />}
      {label &&
        <Text style={styles.tagLabel}>
          {label}
        </Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 8,
    alignItems: 'center'
  },
  tagLabel: {
    color: GoColors.gray,
    fontFamily: GoFonts.semibold,
    fontSize: 14,
    lineHeight: 16,
  }
})

export default GoCardTag;
