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
import { verifyCodeRequest } from '../services/UserAuthRequest'
import Spinner from 'react-native-loading-spinner-overlay';

const { height, width } = Dimensions.get('window');

export class VerifyCode extends React.Component {

    constructor(props) {
        super(props)
        this.state = {code: '', spinner: false, error: ''}
        this.setCode = this.setCode.bind(this)
        this.processVerify = this.processVerify.bind(this)
    }

    setCode(code) {
        this.setState({code: code})
    }

    processVerify() {
        this.setState({spinner: true})
        if (this.state.code.length >= 6) {
            verifyCodeRequest(this.props.navigation.getParam('email', 'none'), this.state.code).then(function(jsonResp) {
                this.setState({spinner: false})
                if (jsonResp.Success) {
                    this.props.navigation.navigate('DashboardRT')
                } else {
                    this.setState({error: 'code verification failed'})
                }
            }.bind(this))
        } else {
            this.setState({error: 'invalid code format'})
        }
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
                <View style={{flex: 0, marginLeft: 0.1 * width, height: 70, marginTop: 0.1 * height, marginBottom: 0.05 * height}}>
                    <Text></Text>
                    <Text style={{fontSize: 16, marginBottom: 15, fontWeight: 'bold'}}>Verification Code</Text>
                    <TextInput keyboardType='number-pad' onChangeText={this.setCode} style={{width: 0.8 * width, borderBottomColor: '#A0A0A0', borderBottomWidth: 1}} placeholder='Code'/>
                </View>
                <GroomerButton onPress={this.processVerify} buttonText="Verify"/>
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
    },

    spinnerTextStyle: {
        color: '#FFF'
      }
  })