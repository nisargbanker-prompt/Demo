import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Colors from './../../config/Theme';
import Metrics from '../../config/Metrics';
import {useSelector, useDispatch} from 'react-redux';
import Config from '../../config/index';
import Utils from '../../utils/index';

const DashboardScreen = props => {
  const dispatch = useDispatch();

  useEffect(async () => {}, []);

  const onRastaurantHandler = index => {
    props.navigation.navigate(Config.Route.RestaurantDetails, {
      data: restaurantList[index],
    });
  };

  const onMapHandler = index => {
    props.navigation.navigate(Config.Route.Map, {
      data: restaurantList[index],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Welcome</Text>
      <View style={styles.lessonBody}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: (Metrics.screenWidth * 25) / 375,
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontFamily: Config.Theme.LARSSEIT_BOLD,
    fontSize: 25,
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    padding: (Metrics.screenWidth * 15) / 375,
    marginBottom: 10,
  },
  lessonBody: {
    flex: 1,
  },
  lessonName: {
    fontFamily: Config.Theme.LARSSEIT_BOLD,
    fontSize: 20,
  },
  lessonSubtext: {
    fontFamily: Config.Theme.LARSSEIT_LIGHT,
    marginTop: 5,
  },
});

export default DashboardScreen;
