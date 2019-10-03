import React from 'react';
import {
  Text,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const DAY_WIDTH = 40
const BORDER_RADIUS = 10
const DAY_HEIGHT = 50

const numToDay = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat'
}

const { height, width } = Dimensions.get('window'); 

export class Day extends React.Component {
  render() {
      let str = this.props.month.toString() + '/' + this.props.date + '/' + this.props.year
      let d = new Date(str)
      day = numToDay[d.getDay()]
    return (
        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', marginRight: 7, height: DAY_HEIGHT, width: DAY_WIDTH, backgroundColor: 'white', borderColor: 'white', borderWidth: 2, borderRadius: BORDER_RADIUS}}>
            <Text style={{fontSize: 14, color: '#8A95AC'}}> {day}</Text>
            <Text style={{fontSize: 14, color: '#8A95AC'}}> {this.props.date}</Text>
        </TouchableOpacity>
    );
  }
}



