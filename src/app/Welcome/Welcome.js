import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';

var styles = require('./welcome');

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Bienvenido a <Text style={styles.name}>Mr. Doggy</Text>
        </Text>
        <View>
          <Image source={require('../../../src/assets/images/logo.png')} style={styles.logo} />
          <Text style={styles.slogan}> Caminantes urbanos</Text>
        </View>        
        <View style={styles.buttons}>
          <Button style={styles.button} title="Registrarse" onPress={onButtonPress} />
          <Button style={styles.button} title="Iniciar Sesion" onPress={goToLogin} />
        </View>        
      </View>
    );
  }
}

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

const goToLogin = () => {
  Actions.login();
};
