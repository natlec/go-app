import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

import GoColors from '../config/GoColors';

function GoButton({ text, backgroundColor = "white", color = "black", onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, { backgroundColor: GoColors[backgroundColor] }]}>
        <Text style={[styles.text, { color: GoColors[color] }]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: GoColors.white,
    borderRadius: 12,
    width: '100%',
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: GoColors.black,
    fontSize: 18,
    lineHeight: 21,
    fontFamily: 'WorkSans_700Bold',
  },
})

export default GoButton;
