import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { login } from 'actions/profileActions';

@connect(
  state => ({
    profile: state.profile.data,
  }),
  { login },
)
class LoginScreen extends Component {
  static propTypes = {
    profile: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
  };

  componentWillReceiveProps(nextProps) {
    const { profile: nextProfile } = nextProps;
    const { profile } = this.props;

    if ( !profile.user && nextProfile.user) {
      Actions.tabbar();
    }
  }

  _onLoginAsDev = () => {
    this.props.login('Developer', '123456');
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

export default LoginScreen;
