'use strict';

var React = require('react-native');

var { StyleSheet } = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  menuPrincipal: {
    backgroundColor: '#00a79d',
    height: 180,
    justifyContent: 'center',
  },
  avatar: {
    height:82,
    width: 82,
    borderRadius: 82/2,
    backgroundColor: 'white'
  },
  menuItem: {
    flexDirection: 'row',
    height: 40, 
    //backgroundColor: 'blue',
    alignItems: 'center',
    marginLeft: 15,
  },
  img: {
    width: null,
    height: null,
    resizeMode: 'contain'
  }
});