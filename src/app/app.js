import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import Splash from './Splash/Splash';
import Welcome from './Welcome/Welcome';
import Login from './Login/Login';
import Home from './Home/Home';


export default class MrDoggy extends Component {
  render() {
    return <Router>
      <Scene key="root">
        <Scene key="Welcome" component={Welcome} initial={true} title="Welcome" hideNavBar='true'/>        
        <Scene key="login" component={Login} title="Login" />
        <Scene key="home" component={Home} title="Home" />
      </Scene>
    </Router>
  }
}

AppRegistry.registerComponent('MrDoggy', () => MrDoggy);
