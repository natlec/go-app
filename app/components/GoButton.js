import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

import GoColors from '../config/GoColors';
import GoFonts from '../config/GoFonts';

function GoButton({ text, backgroundColor = "white", color = "black", onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, { backgroundColor: GoColors[backgroundColor] }]} onPress={onPress}>
        <Text style={[styles.text, { color: GoColors[color] }]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  button: {
    backgroundColor: GoColors.white,
    borderRadius: 12,
    height: 72,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: GoColors.black,
    fontSize: 18,
    lineHeight: 21,
    fontFamily: GoFonts.bold,
  },
})

export default GoButton;
