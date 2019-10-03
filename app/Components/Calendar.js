import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,

} from 'react-native';

import { Day } from './Buttons/Day.js'

const { height, width } = Dimensions.get('window');

const DAY_HEIGHT = 40

let monthToDay = {
    '1': {'days': 31, 'month': 'January'},
    '2': {'days': 28, 'month': 'February'},
    '3': {'days': 31, 'month': 'March'},
    '4': {'days': 30, 'month': 'April'},
    '5': {'days': 31, 'month': 'May'},
    '6': {'days': 30, 'month': 'June'},
    '7': {'days': 31, 'month': 'July'},
    '8': {'days': 31, 'month': 'August'},
    '9': {'days': 30, 'month': 'September'},
    '10': {'days': 31, 'month': 'October'},
    '11': {'days': 30, 'month': 'November'},
    '12': {'days': 31, 'month': 'December'}
}

export class Calendar extends React.Component {
    constructor(props) {
        super(props)
        let currDate = new Date()
        
        this.state = {setMonth: currDate.getMonth() + 1, setDay: currDate.getDate(), setYear: currDate.getFullYear()}
    }

    decrementMonth() {
        if (this.state.setMonth === 1) {
            this.setState({setMonth: 12, setYear: this.state.setYear - 1})
        } else {
            this.setState({setMonth: this.state.setMonth - 1})
        }
    }

    incrementMonth() {
        if (this.state.setMonth === 12) {
            this.setState({setMonth: 1, setYear: this.state.setYear + 1})
        } else {
            this.setState({setMonth: this.state.setMonth + 1})
        }
    }

    render() {
        let days = []

        var currDate = new Date()

        let strMonth = this.state.setMonth.toString()
        let start = this.state.setDay
        if (currDate.getMonth() + 1 !== this.state.setMonth || currDate.getFullYear() !== this.state.setYear) {
            start = 1
        }
        for (var i = start; i <= monthToDay[strMonth]['days']; i++) {
            days.push(<Day date={i} key={this.state.setMonth} month={this.state.setMonth} year={this.state.setYear}/>)
        }

        return (
            <View style={{ height: DAY_HEIGHT + 50, width: 0.8 * width, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{alignItems: 'center', width: 0.8 * width, flex: 1, flexDirection:'row'}}>
                    <TouchableOpacity disabled={(this.state.setMonth === currDate.getMonth() + 1) && (this.state.setYear === currDate.getFullYear())} onPress={this.decrementMonth.bind(this)}><Text> Prev </Text></TouchableOpacity>
                    <Text style={{fontWeight: 'bold'}}>{monthToDay[this.state.setMonth].month}</Text>
                    <TouchableOpacity onPress={this.incrementMonth.bind(this)} ><Text> Next </Text></TouchableOpacity>
                </View>
                <ScrollView horizontal={true} style={{marginBottom: 5, marginTop: 5}}>
                    {days}
                </ScrollView>
            </View>
    );
  }
}