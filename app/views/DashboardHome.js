import React from 'react';
import {
  View,
  Text,
  Dimensions
} from 'react-native';


const { height, width } = Dimensions.get('window'); 

export class DashboardHome extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Welcome!</Text>
      </View>
    );
  }
}