import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/authApp/LoginForm';

class App extends Component {

  componentWIllMount() {
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
      <View>
        <Header title={'Auth'} />
        <LoginForm />
      </View>
    );
  }
}

export default App;
