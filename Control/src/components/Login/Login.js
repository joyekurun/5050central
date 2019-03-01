

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm';


export default class Login extends Component<Props> {
  render() {
    return (
      <KeyboardAvoidingView behavior= "padding" style={styles.container}>

            <View style={styles.formContainer}>
            <LoginForm />
            </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
container: {
    flex: 1,

    //backgroundColor: '#3498db',
  },
});
