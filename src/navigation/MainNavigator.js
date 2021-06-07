import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Route from '../config/Route';

import DashboardScreen from '../screens/dashboard/Dashboard';

const MainStackNavigator = createStackNavigator();

export const MainNavigator = () => {
  return (
    <MainStackNavigator.Navigator>
      <MainStackNavigator.Screen
        name={Route.Dashboard}
        component={DashboardScreen}
        options={props => {
          return {headerShown: false};
        }}
      />
    </MainStackNavigator.Navigator>
  );
};
