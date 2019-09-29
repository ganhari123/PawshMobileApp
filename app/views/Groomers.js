import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet
} from 'react-native';

const { height, width } = Dimensions.get('window'); 

export class Groomers extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>groomers!</Text>
      </View>
    );
  }
}