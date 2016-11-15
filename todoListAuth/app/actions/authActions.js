import axios from 'axios';
import Keychain from 'react-native-keychain';

import {SIGNIN_URL, SIGNUP_URL} from '../api';
import {addAlert}  from './alertsActions';

exports.loginUser = (email, password) => {
  return function(dispatch) {
    return axios.post(SIGNIN_URL, {email, password}).then((response) => {
      var {user_id, token} = response.data;
      Keychain.setGenericPassword(user_id, token)
      .then(function() {
        dispatch(authUser(user_id));
      }).catch((error) => {
        dispatch(addAlert("Could not log in"));
        console.log(error);
      });
    }).catch((error) => {
    dispatch(addAlert("Could not log in"));
    console.log(error);
  });
  }
}

exports.signupUser = (email, password) => {
  return function(dispatch) {
    return axios.post(SIGNUP_URL, {email, password}).then((response) => {
      var {user_id, token} = response.data;
      Keychain.setGenericPassword(userId, token)
      .then(function (){
        dispatch(authUser(user_id));
      }).catch((error) => {
        dispatch(addAlert("Could not log in"));
      });
    }).catch((error) => {
      dispatch(addAlert("Could not sign up"));
    });
  }
}

authUser = (user_id) => {
  return {
    type: 'AUTH_USER',
    user_id
  }
}

exports.unauthUser = {
    type: 'UNAUTH_USER'
}
