/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import { HomePage } from './app/views/HomePage.js';
import { SignIn } from './app/views/SignIn.js'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  HomeRT: {screen: HomePage},
  LoginRT: {screen: SignIn},
}, {
  initialRouteName: 'HomeRT',
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});

export default createAppContainer(MainNavigator);
