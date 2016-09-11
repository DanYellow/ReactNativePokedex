import React, { Component, PropTypes } from 'react';
import { 
  ListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  SegmentedControlIOS
} from 'react-native'; 

import SearchBar from './containers/SearchBar';
import Pokedex from './containers/Pokedex';

export default class PokedexContainer extends Component { 
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <SearchBar />
        <Pokedex style={{flex: 1}} navigator={this.props.navigator} />
      </View>
  )}
}
