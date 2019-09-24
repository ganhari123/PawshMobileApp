import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import { GroomerButton } from "../Components/Buttons/GroomerButton"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { loginRequest } from '../services/UserAuthRequest'
import Spinner from 'react-native-loading-spinner-overlay';

const { height, width } = Dimensions.get('window');

export class SignIn extends React.Component {

    constructor(props) {
        super(props)
        this.state = {email: '', password: '', spinner: false}
        this.setEmail = this.setEmail.bind(this)
        this.setPassword = this.setPassword.bind(this)
    }

    setEmail(email) {
        if (this.validateEmail(email)) {
            this.setState({email: email})
        }
    }

    setPassword(password) {
        this.setState({password: password})
        console.log("INVALID PASSWORD")
        console.log(this.state.password)
    }

    processLoginRequest(email, password) {
        this.setState({spinner: true})
        if (this.validateEmail(email)) {
            console.log(email)
            console.log(password)
            loginRequest(email, password).then(function(jsonResp) {
                if (jsonResp.Success) {
                    this.setState({spinner: false})
                    this.props.navigation.navigate('DashboardRT')
                }
            }.bind(this))
        }
    }

    validateEmail(email) {
        if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            return true
        }
        return false
    }

    render() {
        return (
            <KeyboardAwareScrollView 
                style={{flex: 1, flexDirection: 'column'}} 
                resetScrollToCoords={{ x: 0, y: 0 }}
                scrollEnabled={true}
            >
                <Spinner
                    visible={this.state.spinner}
                    textContent={'Loading...'}
                    textStyle={buttonStyle.spinnerTextStyle}
                    />
                <View style={{flex: 0, marginLeft: 0.1 * width, marginTop: 0.2 * height, marginBottom: 0.05 * height, height: 70}}>
                    <Text style={{paddingBottom: 5, fontSize: 36, fontWeight: 'bold'}}>Hello!</Text>
                    <Text style={{fontSize: 16, color: '#A0A0A0'}}>Great to see you again!</Text>
                </View>
                <View style={{flex: 0, marginLeft: 0.1 * width, height: 70, marginBottom: 0.05 * height}}>
                    <Text></Text>
                    <Text style={{fontSize: 16, marginBottom: 15, fontWeight: 'bold'}}>E-mail</Text>
                    <TextInput onChangeText={this.setEmail} style={{width: 0.8 * width, borderBottomColor: '#A0A0A0', borderBottomWidth: 1}}placeholder='E-mail address'/>
                </View>
                <View style={{flex: 0, marginLeft: 0.1 * width, height: 70, marginBottom: 0.05 * height}}>
                    <Text style={{fontSize: 16, marginBottom: 15, fontWeight: 'bold'}}>Password</Text>
                    <TextInput onChangeText={this.setPassword} style={{width: 0.8 * width, borderBottomColor: '#A0A0A0', borderBottomWidth: 1}}placeholder='password' secureTextEntry={true}/>
                </View>
                <GroomerButton onPress={this.processLoginRequest.bind(this, this.state.email, this.state.password)} buttonText="Sign in"/>
                <View style={{flex: 0, width: width, justifyContent: 'center', alignItems: 'center', }}>
                    <TouchableOpacity style={buttonStyle.signButton} >
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
    },

    spinnerTextStyle: {
        color: '#FFF'
      }
  })