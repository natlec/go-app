import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Animated } from 'react-native';

import { BlurView } from 'expo-blur';

import GoColors from '../config/GoColors';
import GoFonts from '../config/GoFonts';

function GoTabBar({ state, descriptors, navigation }) {
  const [translateValue] = useState(new Animated.Value(0));
  const { routes, index: activeRouteIndex } = state;
  const tabWidth = ((Dimensions.get('window').width - 16) / routes.length);

  // Smoothly move tab button active state under active tab
  Animated.spring(translateValue, {
    toValue: (activeRouteIndex * tabWidth) + 8,
    velocity: 8,
    bounciness: 2,
    useNativeDriver: true,
  }).start();

  // Style tab bar (contained inside function to allow setting tabWidth)
  const styles = StyleSheet.create({
    tabBar: {
      position: 'absolute',
      height: 96,
      left: 0,
      right: 0,
      bottom: 0,
      padding: 8,
      elevation: 2,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'rgba(16, 11, 10, 0.95)',
    },
    tabButton: {
      flex: 1,
      flexGrow: 1,
      padding: 16,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    tabButtonText: {
      color: GoColors.white,
      textTransform: 'uppercase',
      fontFamily: GoFonts.bold,
      fontSize: 14,
      lineHeight: 16,
      marginTop: 8,
    },
    tabButtonActive: {
      width: tabWidth,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    tabButtonActiveInner: {
      width: tabWidth,
      height: 80,
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderRadius: 12,
    }
  })

  return (
    <BlurView intensity={100} tint="dark" style={styles.tabBar}>

      {/* Tab button active state object */}
      <View style={StyleSheet.absoluteFillObject}>
        <Animated.View style={[styles.tabButtonActive, { width: tabWidth, transform: [{ translateX: translateValue }] }]}>
          <View style={styles.tabButtonActiveInner} />
        </Animated.View>
      </View>

      {/* Render all tab buttons */}
      {routes.map((route, routeIndex) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;
        const icon = options.tabBarIcon;
        const isRouteActive = routeIndex === activeRouteIndex;
        const tintColor = isRouteActive ? GoColors.orange : GoColors.white;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isRouteActive && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={routeIndex}
            style={styles.tabButton}
            onPress={onPress}
            onLongPress={onLongPress}
            accessibilityLabel={options.tabBarAccessibilityLabel}
          >
            {icon({ tintColor })}
            <Text style={styles.tabButtonText}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </BlurView>
  );
}

export default GoTabBar;
