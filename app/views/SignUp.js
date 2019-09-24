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

const { height, width } = Dimensions.get('window');

export class SignUp extends React.Component {

    render() {
        return (
            <KeyboardAwareScrollView 
                style={{flex: 1, flexDirection: 'column'}} 
                resetScrollToCoords={{ x: 0, y: 0 }}
                scrollEnabled={true}
            >
                <View style={{flex: 0, marginLeft: 0.1 * width, marginTop: 0.07 * height, marginBottom: 0.05 * height, height: 70}}>
                    <Text style={{paddingBottom: 5, fontSize: 36, fontWeight: 'bold'}}>Hello!</Text>
                    <Text style={{fontSize: 16, color: '#A0A0A0'}}>We're glad you want to join us!</Text>
                </View>

                <View style={{flex: 0, marginLeft: 0.1 * width, height: 70, marginBottom: 0.05 * height}}>
                    <Text style={{fontSize: 16, marginBottom: 15, fontWeight: 'bold'}}>Name</Text>
                    <TextInput style={{width: 0.8 * width, borderBottomColor: '#A0A0A0', borderBottomWidth: 1}}placeholder='Puppy Parent' secureTextEntry={true}/>
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
                    <TextInput style={{width: 0.8 * width, borderBottomColor: '#A0A0A0', borderBottomWidth: 1}}placeholder='00 000 000 0000' secureTextEntry={true}/>
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