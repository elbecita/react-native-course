import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './manageApp/reducers';
import LoginForm from './manageApp/components/LoginForm';

class ManageApp extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCKlRo9JlEWJA6mIYjqFkv4rV6SfDIFoCQ',
      authDomain: 'react-native-course-f8900.firebaseapp.com',
      databaseURL: 'https://react-native-course-f8900.firebaseio.com',
      projectId: 'react-native-course-f8900',
      storageBucket: 'react-native-course-f8900.appspot.com',
      messagingSenderId: '918096850253'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }

}

export default ManageApp;
