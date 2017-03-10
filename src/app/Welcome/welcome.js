'use strict';

var React = require('react-native');

var { StyleSheet } = React;

module.exports = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#00a79d',
  },
  welcome: {
    color: 'white',
    fontSize: 15
  },
  slogan: {
    textAlign: 'center',
    color: 'white',
  },
  name: {
    fontWeight: 'bold',
  },
  logo: {
    width: 200,
    height: 254,
    backgroundColor: '#00a79d',
  },
  buttons: { 
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-around',         
  },
  button: {
    width: 200,
    color: 'white'
  }

});