import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import GoColors from '../config/GoColors';
import GoFonts from '../config/GoFonts';

function GoHeader({ icon, title }) {
  return (
    <View style={styles.container}>
      <MaterialIcons name={icon} size={48} color={GoColors.orange} />
      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 24,
    marginBottom: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: GoColors.white,
    fontSize: 32,
    lineHeight: 38,
    fontFamily: GoFonts.semibold,
    marginTop: 8,
  },
})

export default GoHeader;
