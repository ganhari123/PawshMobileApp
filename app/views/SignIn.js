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

export class SignIn extends React.Component {

    render() {
        return (
            <KeyboardAwareScrollView 
                style={{flex: 1, flexDirection: 'column'}} 
                resetScrollToCoords={{ x: 0, y: 0 }}
                scrollEnabled={true}
            >
                <View style={{flex: 0, marginLeft: 0.1 * width, marginTop: 0.2 * height, marginBottom: 0.05 * height, height: 70}}>
                    <Text style={{paddingBottom: 5, fontSize: 36, fontWeight: 'bold'}}>Hello!</Text>
                    <Text style={{fontSize: 16, color: '#A0A0A0'}}>Great to see you again!</Text>
                </View>
                <View style={{flex: 0, marginLeft: 0.1 * width, height: 70, marginBottom: 0.05 * height}}>
                    <Text style={{fontSize: 16, marginBottom: 15, fontWeight: 'bold'}}>E-mail</Text>
                    <TextInput style={{width: 0.8 * width, borderBottomColor: '#A0A0A0', borderBottomWidth: 1}}placeholder='E-mail address'/>
                </View>
                <View style={{flex: 0, marginLeft: 0.1 * width, height: 70, marginBottom: 0.05 * height}}>
                    <Text style={{fontSize: 16, marginBottom: 15, fontWeight: 'bold'}}>Password</Text>
                    <TextInput style={{width: 0.8 * width, borderBottomColor: '#A0A0A0', borderBottomWidth: 1}}placeholder='password' secureTextEntry={true}/>
                </View>
                <GroomerButton buttonText="Sign in"/>
                <View style={{flex: 0, width: width, justifyContent: 'center', alignItems: 'center', }}>
                    <TouchableOpacity style={buttonStyle.signButton} onPress={() => this.props.navigation.navigate('LoginRT')}>
                        <Text style={{color: '#3BC8CA'}}>Forgot your password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, height: 60 }} />
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