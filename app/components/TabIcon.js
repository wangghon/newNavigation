import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

const TabIcon = (props) => <Text style={{color: props.focused ? 'black' : 'blue'}}>{props.title}</Text>;

TabIcon.propTypes = {
  focused: PropTypes.bool,
  title: PropTypes.string,
};

export default TabIcon;
