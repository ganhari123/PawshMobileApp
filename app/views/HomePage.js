import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import Swiper from "react-native-web-swiper";
import { GroomerButton } from "../Components/Buttons/GroomerButton"
import { OnboardingTitle } from "../Components/ImageComponents/OnboardingTitle"

const { height, width } = Dimensions.get('window');
const onBoardingImages = [require('../images/Onboarding1.png'), 
                          require('../images/Onboarding2.png'), 
                          require('../images/Onboarding3.png')
                        ]
const onBoardingObjects = [
  {
    image: require('../images/Onboarding1.png'),
    title: 'It\'s a better way',
    description: 'Dog groomers with professional experience\nwill groom your dog from the comfort\nof your own home.'
  },
  {
    image: require('../images/Onboarding2.png'),
    title: 'Professional Experience',
    description: 'All groomers on Pawsh have professional\npet grooming experience, which means\nless stress for you and your dog.'
  },
  {
    image: require('../images/Onboarding3.png'),
    title: 'Flat, transparent rates',
    description: 'No hidden fees or price adjustments.\nPeriod.'
  }
]

export class HomePage extends React.Component {

  render() {
    return (
      <View style={{flex: 1}}>

          <View style={{flex: 1, marginTop: 0.03 * height, marginBottom: 0.02 * height}}>
            <Swiper
                    index={1}
                    controlsProps={{
                      prevTitle: '',
                      nextTitle: '',
                      dotsTouchable: false,
                      dotsPos: 'bottom',
                      prevPos: false,
                      nextPos: false
                    }}>
                      <OnboardingTitle imageSrc={onBoardingObjects[0]} />
                      <OnboardingTitle imageSrc={onBoardingObjects[1]} />
                      <OnboardingTitle imageSrc={onBoardingObjects[2]} />
            </Swiper>
          </View>

          <View style={{flex: 0.25}}>
            <GroomerButton buttonText="Book a groomer"/>
            <View style={viewStyle.signView}>
              <TouchableOpacity style={buttonStyle.signButton} onPress={() => this.props.navigation.navigate('LoginRT')}>
                  <Text style={{color: '#3BC8CA'}}>Sign in</Text>
              </TouchableOpacity>
              <TouchableOpacity style={buttonStyle.signButton}>
                  <Text style={{color: '#3BC8CA'}}>Sign up</Text>
              </TouchableOpacity>
            </View>

          </View>
      </View>
    );
  }
}

const viewStyle = StyleSheet.create({
  signView: {
    flex:1,
    flexDirection: 'row',
    height: 60,
    width: width
  }
})

const buttonStyle = StyleSheet.create({
  signButton: {
    flex: 1,
    bottom: 0,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 25,
    width: 0.5 * width
  }
})

const textStyle = StyleSheet.create({
  text: {
    flex: 1,
    marginTop: 30
  }
})