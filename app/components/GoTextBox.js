import React from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';

import GoColors from '../config/GoColors';
import GoFonts from '../config/GoFonts';

function GoTextBox({ label, placeholder = "", ...otherProps }) {
  return (
    <View style={styles.container}>
      <View style={styles.textbox}>
        {/* TextBox Label */}
        {label && otherProps.value !== '' &&
          <Text style={styles.label}>
            {label}
          </Text>}

        {/* TextBox placeholder */}
        {otherProps.value === '' &&
          <Text style={styles.placeholder}>
            {placeholder}
          </Text>}

        {/* TextBox input */}
        <TextInput
          style={styles.input}
          {...otherProps}
        />
      </View>
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
  textbox: {
    position: 'relative',
    backgroundColor: 'rgba(67, 62, 61, 0.25)',
    borderColor: 'rgba(67, 62, 61, 0.5)',
    borderWidth: 2,
    borderRadius: 12,
    height: 72,
    paddingVertical: 16,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  label: {
    textTransform: 'uppercase',
    color: GoColors.white,
    fontSize: 12,
    fontFamily: GoFonts.bold,
    lineHeight: 14,
    marginBottom: 2,
  },
  placeholder: {
    position: 'absolute',
    top: 24,
    bottom: 24,
    left: 24,
    color: GoColors.white,
    fontSize: 18,
    fontFamily: GoFonts.regular,
    lineHeight: 21,
  },
  input: {
    color: GoColors.white,
    fontSize: 18,
    fontFamily: GoFonts.regular,
    lineHeight: 21,
    height: 21,
    width: '100%',
  },
})

export default GoTextBox;
