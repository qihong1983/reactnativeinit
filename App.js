import React, {
  Component
} from 'react';

import {
  AppRegistry,
  StatusBar
} from 'react-native';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Root from './app/Root';

export default class App extends Component {
  render() {
    return (
      <Root/>
    );
  }
}

const styles = StyleSheet.create({

});