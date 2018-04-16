import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Button, Header, Spinner } from './components/common';
import LoginForm from './components/authApp/LoginForm';

class AuthApp extends Component {
  state = { loggedIn: null }

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
    console.log('>>>>> firebase app name: ', firebase.app().name);

    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ loggedIn: !!user });
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={styles.viewStyle}>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.viewStyle}>
            <Spinner />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header title={'Auth'} />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    marginTop: 10,
    flexDirection: 'row'
  }
};

export default AuthApp;
