import React, { Component, PropTypes } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Dimensions,
  TextInput
   } 
from 'react-native';

import { filterPkmns } from '../actions'

export default class SearchBar extends Component { 
  constructor(props, context) { 
    super(props, context); 
  }

  inputValueChanged (event) {
    this.props.dispatch(filterPkmns(event.nativeEvent.text));
  }

  render() {
    return ( 
      <View style={Styles.inputContainer}>
        <TextInput style={Styles.input} onChange={this.inputValueChanged.bind(this)}></TextInput>
        <Text>Results : {this.props.pkmns.length}</Text>
      </View>
    ) 
  } 
}

var {height, width} = Dimensions.get('window');


const Styles = StyleSheet.create({
  input: {
    fontSize: 20,
    textAlign: 'left',
    color: 'black',
    height: 40, 
    borderColor: 'black',
    borderWidth: 1,
    flex: 0.6,
    padding: 5,
    marginBottom: 10,
    backgroundColor: '#FFF'
  },
  inputContainer: {
    padding: 0,
    marginTop: 65,
    alignSelf: 'stretch',
    backgroundColor: '#F00',
    padding: 5,
  }
});
