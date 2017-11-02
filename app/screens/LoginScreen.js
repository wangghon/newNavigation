import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class loginScreen extends Component {


  _onLoginAsDev = () => {
    Actions.tabbar();
  };
  _onHelp = () => {};

  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={this._onLoginAsDev}>
          <Text>Login as Developer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onHelp}>
          <Text>Help</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default loginScreen;
