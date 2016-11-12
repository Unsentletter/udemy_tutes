import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from './Login'

var App = React.createClass({
  render() {
    return (
      <Login />
    );
  }
});

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

module.exports = App;
