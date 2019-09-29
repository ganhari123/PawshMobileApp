import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TextInput,
  StyleSheet,
} from 'react-native';

import { GroomerButton } from "../Components/Buttons/GroomerButton"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CheckBox from 'react-native-check-box'
import { registerRequest } from '../services/UserAuthRequest'
import Spinner from 'react-native-loading-spinner-overlay';

const { height, width } = Dimensions.get('window');

export class SignUp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {spinner: false, error: '', fullName: '', email: '', password: '', phoneNumber: '', checkBox: false, passwordBorder: '#A0A0A0', confPasswordBorder: '#A0A0A0', emailBorder:'#A0A0A0', phoneBorder: '#A0A0A0'}
        this.setFullName = this.setFullName.bind(this)
        this.setEmailAddress = this.setEmailAddress.bind(this)
        this.setPassword = this.setPassword.bind(this)
        this.setConfirmPassword = this.setConfirmPassword.bind(this)
        this.setPhoneNumber = this.setPhoneNumber.bind(this)
        this.setCheckbox = this.setCheckbox.bind(this)
    }

    setFullName(fullName) {
        console.log(fullName)
        this.setState({fullName: fullName})
    }

    setEmailAddress(email) {
        console.log(email)
        if (this.validateEmail(email)) {
            this.setState({email: email})
            this.setState({emailBorder:'#A0A0A0'})
        } else {
            this.setState({emailBorder: 'red'})
        }
    }

    setPassword(password) {
        console.log(password)
        if (this.validatePassword(password)) {
            this.setState({password: password})
            this.setState({passwordBorder: '#A0A0A0'})
        } else {
            this.setState({passwordBorder: 'red'})
        }
    }

    setConfirmPassword(confPassword) {
        console.log(confPassword)
        if (confPassword !== this.state.password) {
            this.setState({confPasswordBorder: 'red'})
        } else {
            this.setState({confPasswordBorder: '#A0A0A0'})
        }
    }

    setPhoneNumber(phn) {
        console.log(phn)
        if (phn.length === 10) {
            this.setState({phoneNumber: phn})
            this.setState({phoneBorder:'#A0A0A0'})
        } else {
            this.setState({phoneBorder:'red'})
        }
    }

    setCheckbox() {
        this.setState({checkBox: !this.state.checkBox})
    }

    processRegisterRequest() {
        this.setState({spinner: true})
        if (this.state.checkBox && this.state.passwordBorder !== 'red' && this.state.emailBorder !== 'red' && this.state.confPasswordBorder !== 'red' && this.state.phoneBorder !== 'red') {
                registerRequest(this.state.email, this.state.password, this.state.fullName, this.state.phoneNumber).then(function(jsonResp) {
                    this.setState({spinner: false})
                    if (jsonResp.Success) {
                        this.props.navigation.navigate('VerifyRT', {email: this.state.email})
                    } else {
                        this.setState({error: jsonResp.Error})
                    }
                }.bind(this))
        } else {
            this.setState({error: 'One of the fields you entered is incorrect'})
        }
    }

    validateEmail(email) {
        if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            return true
        }
        return false
    }

    validatePassword(password) {
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)) {
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
                    textStyle={{color: '#FFF'}}
                    />
                <View style={{flex: 0, marginLeft: 0.1 * width, marginTop: Platform.OS === 'ios' ? 0.1*height : 0.05 * height, marginBottom: 0.02 * height, height: 70}}>
                    <Text style={{paddingBottom: 5, fontSize: 36, fontWeight: 'bold'}}>Hello!</Text>
                    <Text style={{fontSize: 16, color: '#A0A0A0'}}>We're glad you want to join us!</Text>
                </View>

                <View style={{flex: 0, marginLeft: 0.1 * width, height: 70, marginBottom: 0.02 * height}}>
                    <Text style={{fontSize: 16, marginBottom: 15, fontWeight: 'bold'}}>Name</Text>
                    <TextInput onChangeText={this.setFullName} style={{width: 0.8 * width, borderBottomColor: '#A0A0A0', borderBottomWidth: 1}}placeholder='Puppy Parent'/>
                </View>

                <View style={{flex: 0, marginLeft: 0.1 * width, height: 70, marginBottom: 0.02 * height}}>
                    <Text style={{fontSize: 16, marginBottom: 15, fontWeight: 'bold'}}>E-mail</Text>
                    <TextInput keyboardType='email-address' onChangeText={this.setEmailAddress} style={{width: 0.8 * width, borderBottomColor: this.state.emailBorder, borderBottomWidth: 1}}placeholder='E-mail address'/>
                </View>

                <View style={{flex: 0, marginLeft: 0.1 * width, height: 70, marginBottom: 0.02 * height}}>
                    <Text style={{fontSize: 16, marginBottom: 15, fontWeight: 'bold'}}>Password</Text>
                    <TextInput onChangeText={this.setPassword} style={{width: 0.8 * width, borderBottomColor: this.state.passwordBorder, borderBottomWidth: 1}}placeholder='password' secureTextEntry={true}/>
                </View>

                <View style={{flex: 0, marginLeft: 0.1 * width, height: 70, marginBottom: 0.02 * height}}>
                    <Text style={{fontSize: 16, marginBottom: 15, fontWeight: 'bold'}}>Password</Text>
                    <TextInput onChangeText={this.setConfirmPassword} style={{width: 0.8 * width, borderBottomColor: this.state.confPasswordBorder, borderBottomWidth: 1}}placeholder='confirm password' secureTextEntry={true}/>
                </View>

                <View style={{flex: 0, marginLeft: 0.1 * width, height: 70, marginBottom: 0.02 * height}}>
                    <Text style={{fontSize: 16, marginBottom: 15, fontWeight: 'bold'}}>Phone Number</Text>
                    <TextInput keyboardType='phone-pad' textContentType='telephoneNumber' onChangeText={this.setPhoneNumber} style={{width: 0.8 * width, borderBottomColor: this.state.phoneBorder, borderBottomWidth: 1}} placeholder='phone number'/>
                </View>

                <View style={{flex: 0, flexDirection:'row' , justifyContent: 'center', alignItems: 'center', marginLeft: 0, height: 50, marginBottom: 10}}>
                    <CheckBox leftText={'LEGAL'} onClick={this.setCheckbox} isChecked={this.state.checkBox}/>
                    <Text style={{fontSize: 12, marginBottom: 0, color: '#A0A0A0'}}>I agree to<Text style={{fontSize: 12, marginBottom: 15, color: '#3BC8CA'}} onPress={() => this.props.navigation.navigate('TermsRT')}>Terms and Conditions</Text></Text>
                </View>

                <GroomerButton onPress={this.processRegisterRequest.bind(this)} buttonText="Sign Up"/>
                <View style={{flex: 0, marginLeft: 0.1 * width, height: 70, marginTop: 0.02 * height}}>
                    <Text style={{fontSize: 12, color: 'red'}}> { this.state.error } </Text>
                </View>
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