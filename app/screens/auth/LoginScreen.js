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

function LoginScreen({ navigation }) {
  const commonData = GoData.getInstance();

  const schema = Yup.object().shape({
    username: Yup.string().required().label('Username'),
    password: Yup.string().required().min(8).max(256).label('Password'),
  });

  const loginUser = async (user) => {
    if (!user) {
      alert('Error: Failed to login user, no user details provided.');
      return;
    } else {
      const existingUser = await GoUser.findBy({ username_eq: user.username });
      if (!existingUser) {
        alert('Error: Failed to login, no user exists with that username.');
        return;
      } else {
        // Run password through same SHA384 hashing algorithm
        const passwordHash = await Crypto.digestStringAsync(
          Crypto.CryptoDigestAlgorithm.SHA384,
          user.password
        );

        if (existingUser.password !== passwordHash) {
          alert('Error: Failed to login, incorrect password.');
          return;
        } else {
          commonData.setTrips(await GoTrip.query());
          console.log(existingUser);
          commonData.setUser(existingUser);
          commonData.setLoggedIn(true);
          navigation.navigate('Trips');
        }
      }
    }
  };

  return (
    <GoScreen>
      <ScrollView keyboardShouldPersistTaps="always" contentContainerStyle={styles.container}>
        <GoHeader icon="account-circle" title="Login" />

        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={(values, { resetForm }) => {
            loginUser(values).then(() => {
              resetForm();
            });
          }}
          validationSchema={schema}
        >
          {({ values, handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
            <>
              <GoTextBox
                label="Username"
                placeholder="Username"
                autoCapitalize="none"
                autoFocus={true}
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
              <GoButton text="Login" color="white" backgroundColor="orange" onPress={handleSubmit} />
            </>
          )}
        </Formik>

        <Text style={styles.orSplit}>OR</Text>
        <GoButton text="Register" onPress={() => navigation.navigate('Register')} />
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

export default LoginScreen;