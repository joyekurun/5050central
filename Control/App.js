/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import Login from './src/components/Login/Login';

import bgImage from './img/bg3.png'
import top from './img/top.png'
import logo from './img/controlcase.png'

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.container}>


      <View><Image source={top} style={styles.top} /></View>

      <View><Image source={logo} style={styles.logo} /></View>

      <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.rectSignIn}>
            <Text style={styles.signText}>SIGN IN</Text>
          </View>
          <View style={styles.rectVerification}>
            <Text style={styles.veriText}>2 FACTOR AUTHENTICATION</Text>
          </View>
      </View>

      <View style={styles.inner}>

              <Login />
      </View>

      <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.rectForgot}>
          <Text style={styles.forgetText}>Forget Password?</Text>
          </View>

          <TouchableOpacity style={styles.rectNext}>
            <Text style={styles.nextText}>NEXT</Text>
          </TouchableOpacity>

      </View>
      <Text style={styles.rulesText}>By clicking Sign in,</Text>
      <Text style={styles.rulesText}>you agree to our Terms of Services & Privacy Policy</Text>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    alignItems:'center',

  },
  inner:{
    width:310,
    height:150,
    backgroundColor: 'rgba(255,255,255, .8)',
    marginBottom: 0,

  },
  rectSignIn:{
    flexDirection:'row',
    width:90,
    height:40,
    backgroundColor: 'rgba(255,255,255, 1)',
    marginTop: 100,
    margin: 5,
    alignItems:'center',
    justifyContent: "center",
  },
  rectForgot:{
    flexDirection:'row',
    width:165,
    height:40,
    backgroundColor: 'rgba(255,255,255, .0)',
    marginTop: 70,
    margin: 5,
    alignItems:'center',
    justifyContent: "center",
  },
  forgetText:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 10,
    alignItems:'center',
},
  rectVerification:{
    flexDirection:'row',
    width:185,
    height:40,
    backgroundColor: 'rgba(255,255,255, .9)',
    marginTop: 100,
    margin: 5,
    alignItems:'center',
    justifyContent: "center",
  },
  rectNext:{
    flexDirection:'row',
    width:125,
    height:40,
    backgroundColor: 'rgba(255,255,255, .9)',
    marginTop: 65,
    margin: 35,
    alignItems:'center',
    padding: 10,
    justifyContent: "flex-start",
    borderRadius:4
  },
  nextText:{
    color: '#1863B6',
    fontWeight: 'bold',
    fontSize: 16,
},
  veriText:{
    color: '#707070',
    fontWeight: 'bold',
    fontSize: 12,
    fontWeight: 'bold',
  },
  signText:{
    color: '#1863B6',
    fontWeight: 'bold',
    fontSize: 16,
},
  rulesText:{
    color: '#fff',
    fontSize: 12,
    marginBottom: 25,
    alignItems:'center',
  },
  logo: {
    width: 260,
    height: 80,
    marginTop: -200,
  },
  top:{
    width: 399,
    height: 259,
    marginTop: -10,

  },
});
