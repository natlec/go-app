import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import GoColors from '../config/GoColors';
import GoFonts from '../config/GoFonts';

function GoCard({ children, title, subtitle, iconLeft, iconRight, onPress }) {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.cardButton} onPress={onPress}>
        <View style={styles.cardHeader}>
          {iconLeft && <MaterialIcons style={styles.iconLeft} name={iconLeft} size={24} color={GoColors.black} />}
          <View style={styles.cardTitles}>
            <Text style={styles.title}>
              {title}
            </Text>
            <Text style={styles.subtitle}>
              {subtitle}
            </Text>
          </View>
          {iconRight && <MaterialIcons style={styles.iconRight} name={iconRight} size={24} color={GoColors.black} />}
        </View>
      </TouchableOpacity>

      {children && <View style={styles.children}>
        {children}
      </View>}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 8,
    backgroundColor: GoColors.white,
    borderRadius: 12,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  cardButton: {
    width: '100%',
  },
  cardHeader: {
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
  cardTitles: {
    flexGrow: 2,
  },
  title: {
    color: GoColors.black,
    fontSize: 18,
    lineHeight: 21,
    fontFamily: GoFonts.bold,
  },
  subtitle: {
    color: GoColors.gray,
    fontSize: 14,
    lineHeight: 16,
    fontFamily: GoFonts.regular,
    paddingTop: 4,
  },
  iconLeft: {
    marginRight: 16,
  },
  iconRight: {
    marginLeft: 16,
  },
  children: {
    padding: 24,
  },
})

export default GoCard;
