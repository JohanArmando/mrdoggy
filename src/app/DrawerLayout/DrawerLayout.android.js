import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  DrawerLayoutAndroid
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons'

var styles = require('./drawerLayout');
var utilities = require('./../../assets/css/utilities');

export default class DrawerLayout extends Component {
  render() {
    var navigationView = (
      <View style={styles.container} >
        <View style={styles.menuPrincipal} >
          <View style={[utilities.ml]}>
            <View style={[styles.avatar]}>
              <Image style={styles.img}source={require('../../../src/assets/images/avatar.png')} />
            </View> 
            <Text style={[utilities.mt, utilities.bold]}>Viviannys Díaz</Text>
            <Text style={[]}>viviannysdiazv@gmail.com</Text>
          </View>        
        </View>
        <View style={[styles.menuItem, utilities.mt]}>
          <Icon name="account-box" size={30} color="gray" />
          <Text style={utilities.ml} >Perfil</Text>
        </View>
        <View style={styles.menuItem}>
          <Icon name="star" size={30} color="gray" />
          <Text style={utilities.ml} >Mis mascotas</Text>
        </View>
        <View style={styles.menuItem}>
          <Icon name="payment" size={30} color="gray" />
          <Text style={utilities.ml} >Pagos</Text>
        </View>
        <View style={[utilities.divider, utilities.mt]}></View>
        <View style={[styles.menuItem, utilities.mt]}>
          <Icon name="close" size={30} color="gray" />
          <Text style={utilities.ml} >Cerrar Sesion</Text>
        </View>
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
