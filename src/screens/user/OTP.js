import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Config from '../../config/index';
import Utils from '../../utils/index';

import Route from '../../config/Route';

const OTPScreen = props => {
  const [otp, setOtp] = useState('');

  const registerHandler = async () => {
    if (!Utils.MethodUtils.otpValidation(otp)) {
      return;
    }

    props.navigation.navigate(Route.UserInfo);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ENTER OTP</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          value={otp}
          placeholder="OTP"
          keyboardType={'number-pad'}
          maxLength={4}
          onChangeText={otp => setOtp(otp.trim())}
          placeholderTextColor="#003f5c"
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={registerHandler}>
        <Text style={styles.loginText}>SUBMIT</Text>
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

export default OTPScreen;
