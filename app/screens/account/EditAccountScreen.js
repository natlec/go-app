import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import * as Crypto from 'expo-crypto';
import { Formik } from 'formik';
import * as Yup from 'yup';

import GoUser from '../../config/data/GoUser';
import GoData from '../../config/GoData';
import GoColors from '../../config/GoColors';
import GoScreen from '../../components/GoScreen';
import GoButton from '../../components/GoButton';
import GoTextBox from '../../components/GoTextBox';
import GoCard from '../../components/GoCard';

function EditAccountScreen({ navigation }) {
  const commonData = GoData.getInstance();

  const schema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    username: Yup.string().required().label('Username'),
    password: Yup.string().required().min(4).max(256).label('Password'),
    confirmPassword: Yup.string().required().min(4).max(256)
      .oneOf([Yup.ref('password'), null]).label('Confirm Password'),
  });

  const editUser = async (user) => {
    if (!user) {
      alert('Error: Failed to edit user, no user details provided.');
      return;
    } else {
      const existingUser = await GoUser.findBy({ username_eq: user.username });
      if (!existingUser) {
        alert('Error: Failed to edit user, the user does not exist.');
        navigation.navigate('Login');
        commonData.setLoggedIn(false);
        return;
      } else {
        // Store password as SHA384 hash
        const passwordHash = await Crypto.digestStringAsync(
          Crypto.CryptoDigestAlgorithm.SHA384,
          user.password
        );
        const editedUser = { id: existingUser.id, email, username, password: passwordHash };
        await GoUser.update(editedUser);
        commonData.setUser(editedUser);
        navigation.navigate('Account');
      }
    }
  };

  return (
    <GoScreen>
      <ScrollView keyboardShouldPersistTaps="always" contentContainerStyle={styles.container}>
        <GoCard
          title={commonData.getUser().username}
          subtitle={commonData.getUser().email}
          iconLeft="arrow-back-ios"
          onPress={() => navigation.goBack()}
        />

        <Formik
          initialValues={{
            email: commonData.getUser().email,
            username: commonData.getUser().username,
            password: '',
            confirmPassword: ''
          }}
          onSubmit={(values, { resetForm }) => {
            editUser(values).then(() => {
              resetForm();
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
              <GoTextBox
                label="Confirm Password"
                placeholder="Confirm Password"
                textContentType="password"
                secureTextEntry={true}
                value={values.confirmPassword}
                onBlur={() => setFieldTouched('confirmPassword')}
                onChangeText={handleChange('confirmPassword')}
              />
              <GoButton text="Update Details" color="white" backgroundColor="orange" onPress={handleSubmit} />
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
  },
  text: {
    color: GoColors.white
  }
})

export default EditAccountScreen;