import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen/index';
import TripsScreen from './src/screens/TripsScreen/index';

const appNavigator = createStackNavigator({
  Home: HomeScreen,
  Trips: TripsScreen,
}, { initialRouteName: 'Home', })

export default createAppContainer(appNavigator)
