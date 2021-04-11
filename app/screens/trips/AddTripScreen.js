import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import GoTrip from '../../config/data/GoTrip';
import GoUser from '../../config/data/GoUser';
import GoData from '../../config/GoData';
import GoScreen from '../../components/GoScreen';
import GoHeader from '../../components/GoHeader';
import GoTextBox from '../../components/GoTextBox';
import GoButton from '../../components/GoButton';

function AddTripScreen({ navigation }) {
  const commonData = GoData.getInstance();

  const schema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    address: Yup.string().required().label('Address'),
    category: Yup.string().required().label('Category'),
    cost: Yup.string().label('Cost'),
    wifiPassword: Yup.string().min(4).max(512).label('Password'),
    website: Yup.string().url().label('Website'),
    email: Yup.string().email().label('Email'),
    phone: Yup.string().label('Phone'),
  });

  const createTripsTable = useCallback(async () => {
    await GoTrip.createTable();
  });

  const addTrip = async (trip) => {
    if (!trip) {
      alert('Error: Failed to add trip, no trip details provided.');
      return;
    } else {
      const existingTrip = await GoUser.findBy({ address_eq: trip.address });
      if (existingTrip) {
        alert('Error: Failed to add trip, a trip with the same address already exists.');
        return;
      } else {
        const newTrip = {
          creator: commonData.getUser().id,
          updated: Date.now(),
          ...trip
        }
        await GoTrip.create(newTrip);
        commonData.setTrips(await GoTrip.query());
      }
    }
  };


  return (
    <GoScreen>
      <View style={styles.container}>
        <GoHeader icon="add-circle" title="Add Trip" />

        <Formik
          initialValues={{
            name: '',
            address: '',
            category: 'Everything',
            cost: '',
            wifiPassword: '',
            website: '',
            email: '',
            phone: ''
          }}
          onSubmit={(values, { resetForm }) => {
            createTripsTable();
            addTrip(values).then(() => {
              if (commonData.getLoggedIn()) {
                navigation.navigate('Trips');
                resetForm();
              }
            });
          }}
          validationSchema={schema}
        >
          {({ values, handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
            <>
              <GoTextBox
                label="Name"
                placeholder="Name"
                value={values.name}
                autoFocus={true}
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
              <GoTextBox
                label="Category"
                placeholder="Category"
                value={values.category}
                onBlur={() => setFieldTouched('category')}
                onChangeText={handleChange('category')}
              />
              <GoTextBox
                label="Cost"
                placeholder="Cost"
                value={values.cost}
              />
              <GoTextBox
                label="WiFi Password"
                placeholder="WiFi Password"
                textContentType="password"
                secureTextEntry={true}
                value={values.wifiPassword}
              />
              <GoTextBox
                label="Website"
                placeholder="Website"
                value={values.website}
              />
              <GoTextBox
                label="Email"
                placeholder="Email"
                textContentType="emailAddress"
                autoCompleteType="email"
                autoCapitalize="none"
                value={values.email}
              />
              <GoTextBox
                label="Phone"
                placeholder="Phone"
                value={values.phone}
              />
              <GoButton text="Register" color="white" backgroundColor="orange" onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </View>
    </GoScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default AddTripScreen;