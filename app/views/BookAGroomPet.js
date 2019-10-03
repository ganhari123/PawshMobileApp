import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet
} from 'react-native';

import { Calendar } from '../Components/Calendar.js'

const { height, width } = Dimensions.get('window'); 

export class BookAGroomPet extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF8F4'}}>
        <Calendar />
      </View>
    );
  }
}