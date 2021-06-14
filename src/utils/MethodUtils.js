import {Alert} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import Config from '../config/index';

const Storage = {
  setData: async (key, value) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  },
  getData: async key => {
    const data = await AsyncStorage.getItem(key);
    try {
      return JSON.parse(data);
    } catch (error) {
      return data;
    }
  },
  removeData: async key => {
    await AsyncStorage.removeItem(key);
  },
};

const mobileNumberValidation = mobileNumber => {
  if (mobileNumber == '') {
    Alert.alert(
      Config.String.APP_NAME,
      Config.String.ENTER_VALID_MOBILE_NUMBER,
      [
        {
          text: 'Ok',
        },
      ],
    );
  } else if (mobileNumber.length < 10) {
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

  return mobileNumber.length >= 10;
};

const otpValidation = otp => {
  if (otp == '') {
    Alert.alert(Config.String.APP_NAME, Config.String.ENTER_VALID_OTP, [
      {
        text: 'Ok',
      },
    ]);
  } else if (otp.length < 4) {
    Alert.alert(Config.String.APP_NAME, Config.String.ENTER_VALID_OTP, [
      {
        text: 'Ok',
      },
    ]);
  } else if (otp !== '0000') {
    Alert.alert(Config.String.APP_NAME, Config.String.ENTER_VALID_OTP, [
      {
        text: 'Ok',
      },
    ]);
  }

  return otp === '0000';
};

const nameValidation = name => {
  if (name == '') {
    Alert.alert(Config.String.APP_NAME, Config.String.ENTER_VALID_NAME, [
      {
        text: 'Ok',
      },
    ]);
  }

  return name !== '';
};

const storeUserData = () => {
  Storage.setData(Config.String.IS_LOGIN, true);
};

const storeMobileNumber = mobileNumber => {
  Storage.setData(Config.String.MOBILE_NUMBER, mobileNumber);
};

const storeUserName = username => {
  Storage.setData(Config.String.USER_NAME, username);
};

const storeUserRestaurantData = () => {
  Storage.setData(Config.String.RESTAURANT_DATA, true);
};

const storeLastPos = last_position => {
  Storage.setData(Config.String.LAST_POSITION, last_position);
};

const logoutUser = () => {
  Storage.setData(Config.String.IS_LOGIN, false);
};

export default {
  Storage,
  mobileNumberValidation,
  otpValidation,
  nameValidation,
  storeUserData,
  storeUserRestaurantData,
  storeUserName,
  storeMobileNumber,
  storeLastPos,
  logoutUser,
};
