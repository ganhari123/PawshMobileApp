import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const { height, width } = Dimensions.get('window'); 

export class HomeScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {upcoming: true, past: false, upcomingStyle: buttonStyle.selected, pastStyle: buttonStyle.normal}
  }

  handleSelect(whichTab) {
    if (whichTab === 'upcoming') {
      this.setState({upcomingStyle: buttonStyle.selected, pastStyle: buttonStyle.normal, upcoming: true, past: false})
    } else if (whichTab === 'past') {
      this.setState({upcomingStyle: buttonStyle.normal, pastStyle: buttonStyle.selected, upcoming: false, past: true})
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{marginTop: 0.1*height, height: 20, flexDirection: 'row', marginBottom: 0.02 * height}}>
          <TouchableOpacity onPress={this.handleSelect.bind(this, 'upcoming')} style={this.state.upcomingStyle}>
            <Text style={{fontWeight:'bold', fontSize: 15}}>Upcoming</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.handleSelect.bind(this, 'past')} style={this.state.pastStyle}>
            <Text style={{fontWeight:'bold', fontSize: 15}}>Past</Text>
          </TouchableOpacity>
        </View>
        {
          this.state.upcoming && 
          <View style={{flex: 1, backgroundColor: 'red'}}>
          </View>
        }

        {
          this.state.past && 
          <View style={{flex: 1, backgroundColor: 'blue'}}>
          </View>
        }
      </View>
    );
  }
}

const buttonStyle = StyleSheet.create({
  normal: {
    marginLeft: 0.1*width, 
    height: 20
  },

  selected: {
    marginLeft: 0.1*width, 
    height: 20,
    borderBottomColor: 'red', 
    borderBottomWidth: 2
  }
})