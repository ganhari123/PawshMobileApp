import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const { height, width } = Dimensions.get('window');

export class GroomerButton extends React.Component {
    render() {
        return (
            <View style={styles.groomerContainer}>
              <TouchableOpacity style={styles.groomerButton}>
                  <Text style={styles.groomerButtonText}> {this.props.buttonText} </Text>
              </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    groomerButton: {
        borderRadius: 20,
        backgroundColor: '#3BC8CA',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 0.75 * width
    },

    groomerContainer: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: width
    },
    groomerButtonText: {
        color: 'white'
    }
})