import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import GoColors from '../config/GoColors';
import GoFonts from '../config/GoFonts';

function GoButton({ text, icon, backgroundColor = "white", color = "black", onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.button, { backgroundColor: GoColors[backgroundColor] }]} >
          {icon &&
            <MaterialIcons
              style={styles.icon}
              name={icon}
              size={24}
              color={GoColors[color]} />}
          <Text style={[styles.text, { color: GoColors[color] }]}>
            {text}
          </Text>
        </View>
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
    flexDirection: 'row',
  },
  text: {
    color: GoColors.black,
    fontSize: 18,
    lineHeight: 21,
    fontFamily: GoFonts.bold,
  },
  icon: {
    marginRight: 8,
  }
})

export default GoButton;
