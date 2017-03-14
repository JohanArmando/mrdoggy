import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  DrawerLayoutAndroid
} from 'react-native';
import { Actions } from 'react-native-router-flux';

var styles = require('./drawerLayout');
var utilities = require('./../../assets/css/utilities');

export default class DrawerLayout extends Component {
  render() {
    var navigationView = (
      <View style={styles.container} >
        <View style={styles.menuPrincipal} >
          <Image source={require('../../../src/assets/images/logo-125x125.png')} />
        </View>
        <Text style={styles.menuItem, utilities.m}> Perfil </Text>
        <Text style={styles.menuItem, utilities.m}> Mis mascotas </Text>
        <Text style={styles.menuItem, utilities.m}> Pagos </Text>
        <View style={utilities.divider} ></View>
      </View>

      
    );

    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
        {this.props.children}
      </DrawerLayoutAndroid>
    )
  }
}
