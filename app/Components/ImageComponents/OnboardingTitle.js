import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image
} from 'react-native';

const { height, width } = Dimensions.get('window');

export class OnboardingTitle extends React.Component {
    render() {
        return (
            <View style={[styles.slideContainer]}>
                <View style={{flex: 0.8, alignItems: 'center',justifyContent: 'center'}}>
                    <Image style={{width: 0.9*width, height: 0.5*height}}
                        source={this.props.imageSrc.image}
                    />
                </View>
                <View style={{flex: 0.05, alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{fontSize: 26, fontWeight: 'bold', fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Helvetica'}}>
                        {this.props.imageSrc.title}
                    </Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center',justifyContent: 'center', marginBottom: 10}}>
                    <Text style={{color: '#A0A0A0', textAlign: 'center'}}>
                        {this.props.imageSrc.description}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    slideContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})