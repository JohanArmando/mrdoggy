'use strict';

var React = require('react-native');

var { StyleSheet } = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  menuPrincipal: {
    backgroundColor: 'red',
    height: 180,
  },
  menuItem: {
    height: 40, 
    backgroundColor: 'blue'
  }
});