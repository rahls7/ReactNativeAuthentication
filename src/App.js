import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp(
            {
    apiKey: 'AIzaSyB6Toh9AIxC85F8Yoijsh622pBPMWAEU9w',
    authDomain: 'authenticationreactdemo.firebaseapp.com',
    databaseURL: 'https://authenticationreactdemo.firebaseio.com',
    projectId: 'authenticationreactdemo',
    storageBucket: 'authenticationreactdemo.appspot.com',
    messagingSenderId: '660439394458'
  });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        this.setState({ loggedIn: true });
    } else {
        this.setState({ loggedIn: false });
    }
  });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
            return (
                <CardSection>
                    <Button onPress={() => firebase.auth().signOut()}>
                    Log Out
                    </Button>
                    </CardSection>);
            case false:
                return <LoginForm />;
            default:
            return <View style={{ alignSelf: 'center' }}><Spinner size="large" /></View>;
        }     
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
