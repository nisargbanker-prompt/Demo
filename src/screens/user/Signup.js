import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Config from '../../config/index';
import Utils from '../../utils/index';

import {useDispatch} from 'react-redux';
import * as authActions from '../../store/actions/auth';

import Route from '../../config/Route';

const SignUpScreen = props => {
  const [mobileNumber, setMobileNumber] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    _getUSerData();
  }, []);

  _getUSerData = async () => {
    const isUserLogin = await Utils.MethodUtils.Storage.getData(
      Config.String.IS_LOGIN,
    );

    console.log('isUserLogin == > ' + isUserLogin);

    dispatch(authActions.isFrom('register'));

    dispatch(authActions.setUserSesson(isUserLogin));
  };

  const loginHandler = async () => {
    props.navigation.navigate(Route.Login);
  };

  const registerHandler = async () => {
    if (!Utils.MethodUtils.mobileNumberValidation(mobileNumber)) {
      return;
    }

    Utils.MethodUtils.storeMobileNumber(mobileNumber);

    props.navigation.navigate(Route.OTP);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>SIGN UP</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          value={mobileNumber}
          placeholder="Mobile Number"
          keyboardType={'number-pad'}
          maxLength={10}
          onChangeText={mobileNumber => setMobileNumber(mobileNumber.trim())}
          placeholderTextColor="#003f5c"
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={registerHandler}>
        <Text style={styles.loginText}>SIGN UP</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={loginHandler}>
        <Text style={styles.loginText}>
          Already Registered User? Click here to login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Config.Theme.COLOR_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontFamily: Config.Theme.LARSSEIT,
    fontSize: 30,
    color: Config.Theme.COLOR_ACCENT,
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
    fontFamily: Config.Theme.LARSSEIT,
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: Config.Theme.COLOR_ACCENT,
    fontFamily: Config.Theme.LARSSEIT,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
});

export default SignUpScreen;
