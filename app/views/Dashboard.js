import React from 'react';
import {
  View,
  Text,
  Dimensions,
} from 'react-native';

const { height, width } = Dimensions.get('window');

export class Dashboard extends React.Component {

  render() {
    return (
      <View style={{flex: 1}}>
          <View style={{marginTop: 100}}>
              <Text>DASHBOARD</Text>
          </View>
      </View>
    );
  }
}