import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Config from '../../config/index';
import Utils from '../../utils/index';

import * as authActions from '../../store/actions/auth';
import Route from '../../config/Route';

import {useDispatch} from 'react-redux';

const LoginScreen = props => {
  const dispatch = useDispatch();

  const [mobileNumber, setMobileNumber] = useState('');

  const loginHandler = async () => {
    if (!Utils.MethodUtils.mobileNumberValidation(mobileNumber)) {
      return;
    }

    const savedMobileNumber = await Utils.MethodUtils.Storage.getData(
      Config.String.MOBILE_NUMBER,
    );

    if (savedMobileNumber === mobileNumber) {
      dispatch(authActions.isFrom('login'));
      props.navigation.navigate(Route.OTP);
    } else {
      Alert.alert(
        Config.String.APP_NAME,
        Config.String.ENTER_VALID_MOBILE_NUMBER,
        [
          {
            text: 'Ok',
          },
        ],
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LOGIN</Text>
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

      <TouchableOpacity style={styles.loginBtn} onPress={loginHandler}>
        <Text style={styles.loginText}>LOGIN</Text>
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

export default LoginScreen;
