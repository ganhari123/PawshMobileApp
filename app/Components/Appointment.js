import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const { height, width } = Dimensions.get('window'); 

export class Appointment extends React.Component {
  render() {
    return (
      <TouchableOpacity style={{ marginTop: 0.03*height, height: 104, width: 0.8*width, flexDirection: 'row'}}>
        
        <View style={{ backgroundColor: '#FFDECD', flex: 1, flexDirection: 'row', borderRadius: 20, height: 104}}>
            <View style={{flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 20, height: 104, flex: 11}}>
                
                <View style={{borderRadius: 20, height: 104, backgroundColor: '#B5EB9C', flex: 3, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.textComp}>Time</Text>
                    <Text style={styles.textComp}>Day</Text>
                </View>
                
                <View style={{flex: 9, height: 104, flexDirection: 'column'}}>
                    <Text style={{color: 'black', marginLeft: 5, marginTop: 8, fontWeight: 'bold', fontSize: 14}}>Appointment Title</Text>
                    <View style={{flex: 1, marginLeft: 5, flexDirection: 'row'}}>
                        <Text style={{color: '#87A3BE', fontSize: 10, fontWeight: 'bold'}}>Pet names</Text>
                        <Text style={{color: '#87A3BE', fontSize: 10, fontWeight: 'bold'}}>Groomer</Text>
                    </View>
                </View>

            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', height: 104, flex: 1}}>
                <Text style={{color: '#DD9F7D'}}> > </Text>
            </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    textComp: {
        color: 'white'
    }
})