'use strict';

var React = require('react-native');

var { StyleSheet } = React;

module.exports = StyleSheet.create({

  container: {
      flex: 1,
    },
    containerApp:{
      marginTop: 70,
      justifyContent: 'center',
      alignItems: 'center'
    },
    inputs: {
      margin: 40
    },
    button: {
      marginTop: 150,
    },
    buttons: {
      marginTop: 10,
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'space-around', 
    },
    mb: {
      marginBottom: 20
    }

});