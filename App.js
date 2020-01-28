/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  Image,
  TextInput,
  Button
  } from 'react-native';


  export default class Login extends Component {


        state = {
            email: '',
            password: '',
        }

onClickListener(type) {
  console.log(type);
}

    render() {
      return (
        <ScrollView>
        <View style={style.container}>

        <TouchableHighlight
        style={style.signUpButton}
        onPress = {() => this.onClickListener('signup')} >
        <Text style={{fontSize: 20, color: '#a9a9a9'}}>Sign Up</Text>
        </TouchableHighlight>

        <View style={{top: 100, justifyContent: 'center', flexDirection: 'row'}}>
        <Text style={{color: '#a9a9a9', fontSize: 20}}>Connect with</Text>
        </View >

        <View style={{height: 80, top: 120, marginHorizontal: 30, flexDirection: 'row'}}>

        <TouchableHighlight style={style.squareBorderButton} onPress = {() => this.onClickListener('facebook')}>
        <Image style = {{width: 90, height: 25}} source={require('./assets/facebook.png')}/>
        </TouchableHighlight>

        <TouchableHighlight style={style.squareBorderButton} onPress = {() => this.onClickListener('google')}>
        <Image style = {{width: 90, height: 40}} source={require('./assets/google.jpg')}/>
        </TouchableHighlight>

        </View>

        <View>
        <TextInput style={{}} placeholder = "Email Id" style={style.textField} onChangeText = {(email) =>
          this.setStage({email: email})} value={this.state.email} />
        <TextInput style={{}} placeholder = "Password" style={style.textField} onChangeText = {(password) => this.setStage({password: password}) } value={this.state.password} />

        <TouchableHighlight style={style.login} onPress = {() => this.onClickListener('login')}>
        <Text style={{textAlign: 'center', color: '#ffffff', fontSize: 22}}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={style.forgotPassword} onPress = {() => this.onClickListener('forgotpassword')}>
        <Text style={{textAlign: 'center', color: '#a9a9a9', fontSize: 22}}>Forgot Password?</Text>
        </TouchableHighlight>

        </View>



        </View>
        </ScrollView>
        );
      }
    }

    const style = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'column'
        },
        signUpButton: {
          width: 100,
          height: 60,
          top: 50,
          flexDirection: 'row',
          position: 'absolute',
          right: 10,
          fontWeight: 'bold'
        },
        squareBorderButton: {
          alignItems: 'center',
          justifyContent: 'center',
          height: 60,
          flex: 2,
          borderWidth: 1,
          borderColor: '#a9a9a9',
        },
        textField: {
          height: 70,
          top: 160,
          color: '#a9a9a9',
          fontSize: 22,
          textAlign: 'center',
           borderBottomWidth: 1,
           borderBottomColor: '#a9a9a9',
           marginHorizontal: 30
        },
        login: {
          top: 180,
          marginHorizontal: 30,
          height: 50,
          backgroundColor: '#FF982C',
          justifyContent: 'center',
          borderRadius: 5
        },
        forgotPassword: {
          top: 180,
          marginHorizontal: 30,
          height: 50,
          justifyContent: 'center'
        }
        })
