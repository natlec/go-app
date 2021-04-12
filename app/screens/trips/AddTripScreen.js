import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import GoTrip from '../../config/data/GoTrip';
import GoData from '../../config/GoData';
import GoColors from '../../config/GoColors';
import GoFonts from '../../config/GoFonts';
import GoScreen from '../../components/GoScreen';
import GoHeader from '../../components/GoHeader';
import GoTextBox from '../../components/GoTextBox';
import GoPicker from '../../components/GoPicker';
import GoButton from '../../components/GoButton';

function AddTripScreen({ navigation }) {
  const commonData = GoData.getInstance();

  const schema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    address: Yup.string().required().label('Address'),
    category: Yup.string().required().label('Category'),
    cost: Yup.string().label('Cost'),
    wifiPassword: Yup.string().min(4).max(512).label('Password'),
    website: Yup.string().label('Website'),
    email: Yup.string().email().label('Email'),
    phone: Yup.string().label('Phone'),
  });

  const addTrip = async (trip) => {
    if (!trip) {
      alert('Error: Failed to add trip, no trip details provided.');
      return;
    } else {
      const existingTrip = await GoTrip.findBy({ address_eq: trip.address });
      if (existingTrip) {
        alert('Error: Failed to add trip, a trip with the same address already exists.');
        return;
      } else {
        const newTrip = {
          creator: commonData.getUser().username,
          updated: Date.now().toString(),
          ...trip
        }
        console.log(newTrip);
        await GoTrip.create(newTrip);
        commonData.setTrips(await GoTrip.query());
        commonData.setTripView(newTrip);
        navigation.navigate('TripView');
      }
    }
  };

  return (
    <GoScreen>
      <ScrollView keyboardShouldPersistTaps="always" contentContainerStyle={styles.container}>
        <GoHeader icon="add-circle" title="Add Trip" />

        <Formik
          initialValues={{
            name: '',
            address: '',
            category: Object.keys(commonData.getCategories())[0],
            cost: Object.keys(commonData.getCosts())[0],
            wifiPassword: '',
            website: '',
            email: '',
            phone: ''
          }}
          onSubmit={(values, { resetForm }) => {
            addTrip(values).then(() => {
              resetForm();
            });
          }}
          validationSchema={schema}
        >
          {({ values, handleChange, handleSubmit, errors, setFieldValue, setFieldTouched }) => (
            <>
              <GoTextBox
                label="Name"
                placeholder="Name"
                value={values.name}
                onBlur={() => setFieldTouched('name')}
                onChangeText={handleChange('name')}
              />
              <GoTextBox
                label="Address"
                placeholder="Address"
                value={values.address}
                onBlur={() => setFieldTouched('address')}
                onChangeText={handleChange('address')}
              />
              <GoPicker
                label="Category"
                placeholder="Category"
                values={commonData.getCategories()}
                selectedValue={values.category}
                setFieldValue={setFieldValue}
              />
              <GoPicker
                label="Cost"
                placeholder="Cost"
                values={commonData.getCosts()}
                selectedValue={values.cost}
                setFieldValue={setFieldValue}
              />
              <GoTextBox
                label="WiFi Password"
                placeholder="WiFi Password"
                textContentType="password"
                autoCapitalize="none"
                value={values.wifiPassword}
                onChangeText={handleChange('wifiPassword')}
              />
              <GoTextBox
                label="Website"
                placeholder="Website"
                autoCapitalize="none"
                value={values.website}
                onChangeText={handleChange('website')}
              />
              <GoTextBox
                label="Email"
                placeholder="Email"
                textContentType="emailAddress"
                autoCompleteType="email"
                autoCapitalize="none"
                value={values.email}
                onChangeText={handleChange('email')}
              />
              <GoTextBox
                label="Phone"
                placeholder="Phone"
                autoCompleteType="tel"
                autoCapitalize="none"
                value={values.phone}
                onChangeText={handleChange('phone')}
              />
              {(errors.name || errors.address || errors.category || errors.cost || errors.wifiPassword || errors.website || errors.email || errors.phone) &&
                <Text style={{ color: GoColors.orange, fontSize: 16, fontFamily: GoFonts.semibold, marginVertical: 16 }}>
                  Error: Please fill out all required fields.
                </Text>}
              <GoButton text="Add Trip" color="white" backgroundColor="orange" onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </ScrollView>
    </GoScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 96,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default AddTripScreen;