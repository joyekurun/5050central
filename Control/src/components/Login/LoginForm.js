

import React, {Component} from 'react';
import {StyleSheet, TextInput, View, Text,TouchableOpacity, StatusBar} from 'react-native';



export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content" />
        <TextInput
        placeholder="username"
        placeholderTextColor="#707070"
        returnKeyType="next"
        onSubmitEditing={() => this.passwordInput.focus()}
        keyboardType= "email-address"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input} />

        <TextInput
        placeholder="password"
        placeholderTextColor="#707070"
        returnKeyType="go"
        secureTextEntry
        style={styles.input}
        ref={(input) => this.passwordInput = input} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  input:{
    height: 40,
    backgroundColor: '#D1D1D1',
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#707070',
    fontSize: 20,
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 0,
  },

});
