/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import AppNavigator from './app/navigation/AppNavigator'
import PrimarySearch from './app/components/PrimarySearch'
import './shim.js'

export default class tacoApp extends Component {

  render() {
    return (
      <AppNavigator initialRoute={{ ident: "PrimarySearch"}} />
    )
  }
}
AppRegistry.registerComponent('tacoApp', () => tacoApp);
