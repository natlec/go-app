import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import GoColors from '../../config/GoColors';
import GoFonts from '../../config/GoFonts';
import GoScreen from '../../components/GoScreen';
import GoHeader from '../../components/GoHeader';
import GoTextBox from '../../components/GoTextBox';
import GoButton from '../../components/GoButton';

function RegisterScreen({ navigation }) {
  return (
    <GoScreen>
      <View style={styles.container}>
        <GoHeader icon="account-circle" title="Register" />
        <GoTextBox getRef={ref => this.setState({ emailRef: ref })} label="Email" placeholder="Email" />
        <GoTextBox getRef={ref => this.setState({ usernameRef: ref })} label="Username" placeholder="Username" />
        <GoTextBox getRef={ref => this.setState({ passwordRef: ref })} label="Password" placeholder="Password" />
        <GoButton text="Register" color="white" backgroundColor="orange" onPress={() => navigation.navigate('Trips')} />
        <Text style={styles.orSplit}>OR</Text>
        <GoButton text="Login" onPress={() => navigation.navigate('Login')} />
      </View>
    </GoScreen>
  );
}

const styles = StyleSheet.create({
  container: {
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