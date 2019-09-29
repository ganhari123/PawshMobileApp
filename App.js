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
import { SignUp } from './app/views/SignUp.js';
import { VerifyCode } from './app/views/VerifyCode.js'

import { HomeScreen } from './app/views/HomeScreen.js'
import { Groomers } from './app/views/Groomers.js'
import { Profile } from './app/views/Profile.js'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MainNavigator = createStackNavigator({
  HomeRT: {screen: HomePage},
  LoginRT: {screen: SignIn},
  SignupRT: {screen: SignUp},
  DashboardRT: {screen: createBottomTabNavigator({
    Home: {
      screen: HomeScreen,
      tabBarLabel: 'Home',
      navigationOptions: {
        tabBarIcon: ({focused, tintColor:color}) => (
          <Icon name="home" size={20} color={color} />
        )
     }
    },
    Groomer: {
      screen: Groomers,
      navigationOptions: {
        tabBarLabel: 'New booking',
        tabBarIcon: ({tintColor:color}) => (
          <Icon name="dog" size={20} color={color} />
        )
     }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({focused, tintColor:color}) => (
          <Icon name="face-profile" size={20} color={color} />
        )
     }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#3BC8CA',
      labelStyle: {
        fontSize: 10,
      },
      style: {
        height: 40,
        shadowOpacity: 0.2,
        shadowRadius: 5,
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { height: 0, width: 0 }
      }
    }
  })},
  VerifyRT: {screen: VerifyCode},
}, {
  initialRouteName: 'DashboardRT',
  headerMode: 'none',
  navigationOptions: {
    headerVisible: true,
  }
});

export default createAppContainer(MainNavigator);
