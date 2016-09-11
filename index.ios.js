/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
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
          }}
          tintColor="#008888"
          style={{flex: 1}}
          barTintColor='#fff'
        />
      </Provider>
    );
  }
}



AppRegistry.registerComponent('ReactNativePokedex', () => ReactNativePokedex);
