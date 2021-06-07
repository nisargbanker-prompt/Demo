import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Route from '../config/Route';

import LoginScreen from '../screens/user/Login';
import SignUpScreen from '../screens/user/Signup';
import OTPScreen from '../screens/user/OTP';
import UserInfoScreen from '../screens/user/UserInfo';

const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator>
      <AuthStackNavigator.Screen
        name={Route.SignUp}
        component={SignUpScreen}
        options={props => {
          return {headerShown: false};
        }}
      />
      <AuthStackNavigator.Screen
        name={Route.OTP}
        component={OTPScreen}
        options={props => {
          return {headerShown: false};
        }}
      />
      <AuthStackNavigator.Screen
        name={Route.UserInfo}
        component={UserInfoScreen}
        options={props => {
          return {headerShown: false};
        }}
      />
      <AuthStackNavigator.Screen
        name={Route.Login}
        component={LoginScreen}
        options={props => {
          return {headerShown: false};
        }}
      />
    </AuthStackNavigator.Navigator>
  );
};
