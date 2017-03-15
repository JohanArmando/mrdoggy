/*'use strict';

var React = require('react');
var ReactNative = require('react-native');
var nativeImageSource = require('nativeImageSource');
var {
  StyleSheet,
  Text,
  View,
} = ReactNative;

var ToolbarAndroid = require('ToolbarAndroid');

class Toolbar extends React.Component {
  static title = '<ToolbarAndroid>';
  static description = 'Examples of using the Android toolbar.';

  state = {
    page: 'Mr. Doggy',
    actionText: 'Example app with toolbar component',
    toolbarSwitch: false,
    colorProps: {
      titleColor: '#3b5998',
      subtitleColor: '#6a7180',
    },
  };

  render() {
    return (
      <ToolbarAndroid
        actions={toolbarActions}
        navIcon={require('../../../src/assets/images/menu.png')}
        onActionSelected={this._onActionSelected}
        onIconClicked={this._onIconClicked}
        style={styles.toolbar}
        subtitle={this.state.actionText}
        title={this.state.page} />
    );
  }

  _onIconClicked(){
    this.props.sidebarRef.refs['DRAWER'].openDrawer();
  }

  _onActionSelected = (position) => {
    this.setState({
      actionText: 'Selected ' + toolbarActions[position].title,
    });
  };

  openDrawer() {
    console.warn("asdad");
  }

}


var toolbarActions = [
  {title: 'Create', icon: nativeImageSource({
    android: 'ic_create_black_48dp',
    width: 96,
    height: 96
  }), show: 'always'},
  {title: 'Filter'},
  {title: 'Settings', icon: nativeImageSource({
    android: 'ic_settings_black_48dp',
    width: 96,
    height: 96
  }), show: 'always'},
];

var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#4883da',
    height: 56,
  },
});

module.exports = Toolbar;*/

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

var ToolbarAndroid = require('ToolbarAndroid');

class Toolbar extends Component {
  render() {
    var navigator = this.props.navigator;
    return (
      <ToolbarAndroid
        title={this.props.title}
        navIcon={require('../../../src/assets/images/menu.png')}
        style = {styles.toolbar}
        titleColor={'white'} 
        onIconClicked={this.props.sidebarRef}/>
    );
  }
  
  _onIconClicked(){
    this.props.sidebarRef.refs['DRAWER'].openDrawer();
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    height: 56,
    backgroundColor: '#08AE9E',
  width: 370,
  alignItems: 'center'
  }  
});

module.exports = Toolbar;