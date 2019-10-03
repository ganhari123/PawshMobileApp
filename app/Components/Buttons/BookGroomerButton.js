import React from 'react';
import {
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';
import { withNavigation } from 'react-navigation';

const { height, width } = Dimensions.get('window');

class BookGroomerButton extends React.Component {

    pressMe() {
        console.log("pressed")
        this.props.navigation.navigate('BookGroomPetRT')
    }

    render() {
        return (
            <TouchableOpacity onPress={this.pressMe.bind(this)}>
                <Image style={{ marginBottom: 40, height: 70, width: 70}} source={require('../../images/round_plus.png')} />
            </TouchableOpacity>
        )
    }
}

export default withNavigation(BookGroomerButton)