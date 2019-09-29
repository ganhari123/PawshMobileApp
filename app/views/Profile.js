import React from 'react';
import {
  View,
  Text,
  Dimensions
} from 'react-native';

const { height, width } = Dimensions.get('window'); 

export class Profile extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>profile!</Text>
      </View>
    );
  }
}