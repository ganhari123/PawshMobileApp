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
import { BookAGroomPet } from './app/views/BookAGroomPet.js'

import { DashboardHome } from './app/views/DashboardHome.js'
import { Appointments } from './app/views/Appointments.js'
import { Groomers } from './app/views/Groomers.js'
import { Profile } from './app/views/Profile.js'
import BookGroomerButton from './app/Components/Buttons/BookGroomerButton.js'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MainNavigator = createStackNavigator({
  HomeRT: {screen: HomePage},
  LoginRT: {screen: SignIn},
  SignupRT: {screen: SignUp},
  DashboardRT: {
    screen: createBottomTabNavigator({
      Home: {
        screen: DashboardHome,
        tabBarLabel: 'Home',
        navigationOptions: {
          tabBarIcon: ({focused, tintColor:color}) => (
            <Icon name="home" size={30} color={color} />
          )
        }
      },
      Groomers: {
        screen: Groomers,
        navigationOptions: {
          tabBarIcon: ({ tintColor:color, focused }) => (
            <Icon name="scissors-cutting" size={30} color={color} />
          )
        }
      },
      BookGroomer: {
        screen: Groomers,
        navigationOptions: {
          tabBarIcon: ({ tintColor, focused }) => (
            <BookGroomerButton />
          )
        }
      },
      Appointment: {
        screen: Appointments,
        tabBarLabel: 'appointments',
        navigationOptions: {
          tabBarIcon: ({focused, tintColor:color}) => (
            <Icon name="book" size={30} color={color} />
          )
        }
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, tintColor:color}) => (
            <Icon name="face-profile" size={30} color={color} />
          )
        }
      }
    },
    {
      tabBarOptions: {
        activeTintColor: '#3BC8CA',
        showLabel: false,
        style: {
          height: 40,
          shadowOpacity: 0.2,
          shadowRadius: 5,
          justifyContent: 'center',
          shadowColor: 'black',
          shadowOffset: { height: 0, width: 0 }
        }
      }
    })
  },
  VerifyRT: {screen: VerifyCode},
  BookGroomPetRT: {screen: BookAGroomPet}
}, {
  initialRouteName: 'HomeRT',
  headerMode: 'none',
  navigationOptions: {
    headerVisible: true,
  }
});

export default createAppContainer(MainNavigator);
