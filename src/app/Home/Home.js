import React, { Component } from 'react';  
import {
  View,  
  Text,
  StyleSheet,
  DrawerLayoutAndroid,
  ToolbarAndroid
} from 'react-native';

import DrawerLayout from './../DrawerLayout/DrawerLayout'

export default class Home extends Component {  
  render() {
    return (
      <DrawerLayout>
        <View>
          <Text> Welcome User </Text>
        </View>
      </DrawerLayout>
    )   
  }
}
