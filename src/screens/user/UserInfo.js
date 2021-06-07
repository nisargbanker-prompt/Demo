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

import Route from '../../config/Route';
import * as authActions from '../../store/actions/auth';

const UserInfoScreen = props => {
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const submitHandler = async () => {
    if (!Utils.MethodUtils.nameValidation(name)) {
      return;
    }

    Utils.MethodUtils.storeUserName(name);
    dispatch(authActions.register()).then(data => {
      props.navigation.navigate(Route.Dashboard);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>USER INFO</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          value={name}
          placeholder="Name"
          keyboardType={'default'}
          onChangeText={name => setName(name.trim())}
          placeholderTextColor="#003f5c"
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={submitHandler}>
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

export default UserInfoScreen;
