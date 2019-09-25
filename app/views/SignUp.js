import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { GroomerButton } from "../Components/Buttons/GroomerButton"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CheckBox from 'react-native-check-box'
import PhoneInput from 'react-native-phone-input'

const { height, width } = Dimensions.get('window');

export class SignUp extends React.Component {

    render() {
        return (
            <KeyboardAwareScrollView 
                style={{flex: 1, flexDirection: 'column'}} 
                resetScrollToCoords={{ x: 0, y: 0 }}
                scrollEnabled={true}
            >
                <View style={{flex: 0, marginLeft: 0.1 * width, marginTop: 0.05 * height, marginBottom: 0.05 * height, height: 70}}>
                    <Text style={{paddingBottom: 5, fontSize: 36, fontWeight: 'bold'}}>Hello!</Text>
                    <Text style={{fontSize: 16, color: '#A0A0A0'}}>We're glad you want to join us!</Text>
                </View>

                <View style={{flex: 0, marginLeft: 0.1 * width, height: 70, marginBottom: 0.05 * height}}>
                    <Text style={{fontSize: 16, marginBottom: 15, fontWeight: 'bold'}}>Name</Text>
                    <TextInput style={{width: 0.8 * width, borderBottomColor: '#A0A0A0', borderBottomWidth: 1}}placeholder='Puppy Parent'/>
                </View>

            
                <View style={{flex: 0, marginLeft: 0.1 * width, height: 70, marginBottom: 0.05 * height}}>
                    <Text style={{fontSize: 16, marginBottom: 15, fontWeight: 'bold'}}>E-mail</Text>
                    <TextInput style={{width: 0.8 * width, borderBottomColor: '#A0A0A0', borderBottomWidth: 1}}placeholder='E-mail address'/>
                </View>

                <View style={{flex: 0, marginLeft: 0.1 * width, height: 70, marginBottom: 0.05 * height}}>
                    <Text style={{fontSize: 16, marginBottom: 15, fontWeight: 'bold'}}>Password</Text>
                    <TextInput style={{width: 0.8 * width, borderBottomColor: '#A0A0A0', borderBottomWidth: 1}}placeholder='password' secureTextEntry={true}/>
                </View>

                <View style={{flex: 0, marginLeft: 0.1 * width, height: 70, marginBottom: 0.05 * height}}>
                    <Text style={{fontSize: 16, marginBottom: 15, fontWeight: 'bold'}}>Phone Number</Text>
                    <PhoneInput ref='phone' style={{width: 0.8 * width, borderBottomColor: '#A0A0A0', borderBottomWidth: 1}}/>
                </View>

                <View style={{flex: 0, flexDirection:'row' , marginLeft: 0.3 * width, height: 50, marginBottom: 0.0005 * height}}>
                    <CheckBox />
                    <Text style={{fontSize: 12, marginBottom: 15, color: '#A0A0A0'}}>I agree to<Text style={{fontSize: 12, marginBottom: 15, color: '#3BC8CA'}} onPress={() => this.props.navigation.navigate('TermsRT')}>Terms and Conditions</Text></Text>
                    </View>


                <GroomerButton buttonText="Sign Up"/>
            </KeyboardAwareScrollView>
        )
    }
}

const buttonStyle = StyleSheet.create({
    signButton: {
      flex: 1,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      height: 25,
      width: 0.5 * width
    }
  })