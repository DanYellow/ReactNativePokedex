/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  NavigatorIOS,
  Navigator,
  TouchableHighlight
} from 'react-native';



import Pokedex from './js/Pokedex';

class ReactNativePokedex extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          title: "Pokédex",
          component: Pokedex,
          passProps: { title: 'foo' },
          titleTextColor: 'red'
        }}
        tintColor="#008888"
        style={{flex: 1, borderBottomColor: 'red', borderBottomWidth: 4}}
        barTintColor='#fff'
        />
    );
  }
}



AppRegistry.registerComponent('ReactNativePokedex', () => ReactNativePokedex);
