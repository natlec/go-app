import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

import * as Crypto from 'expo-crypto';
import { Formik } from 'formik';
import * as Yup from 'yup';

import GoTrip from '../../config/data/GoTrip';
import GoUser from '../../config/data/GoUser';
import GoData from '../../config/GoData';
import GoColors from '../../config/GoColors';
import GoFonts from '../../config/GoFonts';
import GoScreen from '../../components/GoScreen';
import GoHeader from '../../components/GoHeader';
import GoTextBox from '../../components/GoTextBox';
import GoButton from '../../components/GoButton';

function RegisterScreen({ navigation }) {
  const commonData = GoData.getInstance();

  const schema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    username: Yup.string().required().label('Username'),
    password: Yup.string().required().min(8).max(256).label('Password'),
  });

  const registerUser = async (user) => {
    if (!user) {
      alert('Error: Failed to register user, no user details provided.');
      return;
    } else {
      const existingUser = await GoUser.findBy({ username_eq: user.username });
      if (existingUser) {
        alert('Error: Failed to register, the username is already in use.');
        return;
      } else {
        // Store password as SHA384 hash
        const passwordHash = await Crypto.digestStringAsync(
          Crypto.CryptoDigestAlgorithm.SHA384,
          user.password
        );
        const newUser = { email: user.email, username: user.username, password: passwordHash };
        await GoUser.create(newUser);
        commonData.setTrips(await GoTrip.query());
        console.log(newUser);
        commonData.setUser(newUser);
        commonData.setLoggedIn(true);
        navigation.navigate('Trips');
      }
    }
  };

  return (
    <GoScreen>
      <ScrollView keyboardShouldPersistTaps="always" contentContainerStyle={styles.container}>
        <GoHeader icon="account-circle" title="Register" />

        <Formik
          initialValues={{ email: '', username: '', password: '' }}
          onSubmit={(values, { resetForm }) => {
            registerUser(values).then(() => {
              if (commonData.getLoggedIn()) {
                resetForm();
              }
            });
          }}
          validationSchema={schema}
        >
          {({ values, handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
            <>
              <GoTextBox
                label="Email"
                placeholder="Email"
                textContentType="emailAddress"
                autoCompleteType="email"
                autoFocus={true}
                autoCapitalize="none"
                value={values.email}
                onBlur={() => setFieldTouched('email')}
                onChangeText={handleChange('email')}
              />
              <GoTextBox
                label="Username"
                placeholder="Username"
                autoCapitalize="none"
                value={values.username}
                onBlur={() => setFieldTouched('username')}
                onChangeText={handleChange('username')}
              />
              <GoTextBox
                label="Password"
                placeholder="Password"
                textContentType="password"
                secureTextEntry={true}
                value={values.password}
                onBlur={() => setFieldTouched('password')}
                onChangeText={handleChange('password')}
              />
              <GoButton text="Register" color="white" backgroundColor="orange" onPress={handleSubmit} />
            </>
          )}
        </Formik>

        <Text style={styles.orSplit}>OR</Text>
        <GoButton text="Login" onPress={() => navigation.navigate('Login')} />
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
  },
  orSplit: {
    color: GoColors.white,
    fontFamily: GoFonts.semibold,
    fontSize: 16,
    lineHeight: 18,
    marginVertical: 32,
  }
})

export default RegisterScreen;