import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { UpcomingApp } from './UpcomingApp';
import { PastApp } from './PastApp';

const { height, width } = Dimensions.get('window'); 

export class Appointments extends React.Component {

  constructor(props) {
    super(props)
    this.state = {upcoming: true, previous: false, upcomingStyle: buttonStyle.selected, pastStyle: buttonStyle.normal}
  }

  handleSelect(whichTab) {
    if (whichTab === 'upcoming') {
      this.setState({upcomingStyle: buttonStyle.selected, pastStyle: buttonStyle.normal, upcoming: true, previous: false})
    } else if (whichTab === 'previous') {
      this.setState({upcomingStyle: buttonStyle.normal, pastStyle: buttonStyle.selected, upcoming: false, previous: true})
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{marginLeft: 0.1 * width, marginTop: 0.1*height, height: 60, flexDirection: 'column', marginBottom: 0.02 * height}}>
          <Text style={{fontWeight:'bold', fontSize: 26}}>Bookings</Text>
          <Text style={{fontSize: 16, color: '#A0A0A0'}}>Check your upcoming and past sessions</Text>
        </View>

        <View style={{marginLeft: 0.1*width, height: 22, flexDirection: 'row', marginBottom: 0.02 * height}}>
          <TouchableOpacity onPress={this.handleSelect.bind(this, 'upcoming')} style={this.state.upcomingStyle}>
            <Text style={textStyle.tabs}>Upcoming</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.handleSelect.bind(this, 'previous')} style={this.state.pastStyle}>
            <Text style={textStyle.tabs}>Previous</Text>
          </TouchableOpacity>
        </View>
        {
          this.state.upcoming && 
          <UpcomingApp />
        }

        {
          this.state.previous && 
          <PastApp />
        }
      </View>
    );
  }
}

const buttonStyle = StyleSheet.create({
  normal: {
    height: 22,
    marginRight: 0.05 * width
  },

  selected: { 
    height: 22,
    marginRight: 0.05 * width,
    borderBottomColor: '#3BC8CA', 
    borderBottomWidth: 2
  }
})

const textStyle = StyleSheet.create({
  tabs: {
    fontWeight:'bold', 
    fontSize: 15, 
    paddingBottom: 5
  }
})