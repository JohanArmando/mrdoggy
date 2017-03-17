import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image,
  TextInput,
  ScrollView,
  Alertw
} from 'react-native';
import { Actions } from 'react-native-router-flux';

var styles = require('./loginStyles');

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.containerApp}>
          <Image source={require('../../../src/assets/images/logo-125x125.png')} style={styles.logo} />
          <View style={styles.inputs}>
            <TextInput style={styles.input}
              placeholder='Correo Electrónico'                
              onChangeText={(email) => this.setState({email})}
            />
            <TextInput style={styles.input, styles.mb} 
              placeholder='Contraseña'                
              onChangeText={(password) => this.setState({password})}              
            />
            <Button style={styles.button} title="Iniciar Sesion" onPress={onButtonPress} />
            <View style={styles.buttons}>
              <Button title="Registrarse" onPress={onButtonPress} />
              <Button title="Iniciar Sesion" onPress={onButtonPress} />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const onButtonPress = () => {
  Actions.home();
};
