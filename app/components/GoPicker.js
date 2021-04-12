import React, { useState } from 'react';
import { TouchableWithoutFeedback, Modal, Text, StyleSheet, ScrollView, View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import GoColors from '../config/GoColors';
import GoFonts from '../config/GoFonts';
import GoScreen from './GoScreen';
import GoButton from './GoButton';
import GoCard from './GoCard';

function GoPicker({ label, values, value, field, form, ...props }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.picker}>
        {/* Picker Label */}
        {label &&
          <Text style={styles.label}>
            {label}
          </Text>}

        {/* Picker input */}
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
          <View style={styles.input}>
            <Text style={styles.inputValue}>
              {value}
            </Text>
            <MaterialIcons style={styles.inputIcon} name="keyboard-arrow-down" size={24} color={GoColors.white} />
          </View>
        </TouchableWithoutFeedback>

        {/* Picker modal */}
        <Modal visible={modalVisible} animationType="slide" onRequestClose={() => setModalVisible(false)}>
          <GoScreen>
            <ScrollView keyboardShouldPersistTaps="always" contentContainerStyle={styles.modalContainer}>
              <GoCard
                title={label}
                subtitle="Choose ONE option."
                iconRight="close"
                onPress={() => {
                  setModalVisible(false);
                }}>
                {Object.entries(values).map(([valueLabel, valueIcon]) =>
                  <GoButton
                    key={valueLabel}
                    style={styles.inputValue}
                    text={valueLabel}
                    icon={valueIcon}
                    color={(value === valueLabel ? 'white' : 'black')}
                    backgroundColor={(value === valueLabel ? 'orange' : 'lightgray')}
                    onPress={() => {
                      setModalVisible(false);
                      form.setFieldValue(field.name, valueLabel);
                    }}
                  />
                )}
              </GoCard>
            </ScrollView>
          </GoScreen>
        </Modal>
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
  picker: {
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
  modalContainer: {
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    position: 'relative',
    width: '100%',
  },
  inputValue: {
    color: GoColors.white,
    fontSize: 18,
    fontFamily: GoFonts.regular,
    lineHeight: 21,
    height: 21,
    width: '100%',
    padding: 0,
  },
  inputIcon: {
    position: 'absolute',
    right: 0,
    top: -10,
    bottom: 0,
  }
})

export default GoPicker;
