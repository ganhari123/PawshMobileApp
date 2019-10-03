import React from 'react';
import {
  View,
  Dimensions,
  ScrollView
} from 'react-native';

import { Appointment } from '../Components/Appointment.js'

const { height, width } = Dimensions.get('window'); 

export class UpcomingApp extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: '#FFF8F4', flex: 1}}>
        <ScrollView contentContainerStyle={{alignItems: 'center'}} style={{width: width, flex: 1}}>
          <Appointment />
          <Appointment />
          <Appointment />
          <Appointment />
          <Appointment />
          <Appointment />
          <Appointment />
          <Appointment />
          <Appointment />
          <Appointment />
          <Appointment />
          <Appointment />
        </ScrollView>
      </View>
    );
  }
}