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

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';


import PokedexContainer from './js/PokedexContainer';
import reducer from './js/reducers'

var store    = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware
  )
)

class ReactNativePokedex extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigatorIOS
          initialRoute={{
            title: "Pokédex",
            component: PokedexContainer,
            passProps: { title: 'foo' },
            titleTextColor: 'red'
          }}
          tintColor="#008888"
          style={{flex: 1, borderBottomColor: 'red', borderBottomWidth: 4}}
          barTintColor='#fff'
          />
      </Provider>
    );
  }
}



AppRegistry.registerComponent('ReactNativePokedex', () => ReactNativePokedex);
