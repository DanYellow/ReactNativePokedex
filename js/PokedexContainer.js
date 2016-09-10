import React, { Component, PropTypes } from 'react';
import { 
  ListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native'; 

import SearchBar from './containers/SearchBar';
import Pokedex from './containers/Pokedex';

export default class PokedexContainer extends Component { 
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <SearchBar />
        <Pokedex />
      </View>
  )}
}
