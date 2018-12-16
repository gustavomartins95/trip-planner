import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen/index';
import TripsScreen from './src/screens/TripsScreen/index';
import TripScreen from './src/screens/TripScreen/index';
import AddTripScreen from './src/screens/AddTripScreen/index';
import AddPointScreen from './src/screens/AddPointScreen/index';

const appNavigator = createStackNavigator({
  Home: HomeScreen,
  Trips: TripsScreen,
  Trip: TripScreen,
  AddTrip: AddTripScreen,
  AddPoint: AddPointScreen,
}, { initialRouteName: 'Home', })

export default createAppContainer(appNavigator)
