import React from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from './Login';
import Main from './Main';

var App = React.createClass({
  getInitialState(){
    return {}
  },
  render() {
    if (this.props.user_id) {
      return (
        <Main />
      );
    } else {
      return (
        <Login />
      );
    }
  }
});

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#ccc'
  },
});

var mapStateToProps = (state) => {
  return {
    user_id: state.auth.user_id
  }
}

module.exports = connect(mapStateToProps)(App);
