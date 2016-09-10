import React, { Component, PropTypes } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Dimensions,
  TextInput
   } 
from 'react-native';

import { searchPkmn } from '../actions'

export default class SearchBar extends Component { 
  constructor(props, context) { 
    super(props, context); 
  }

  inputValueChanged (event) {
    this.props.dispatch(searchPkmn(event.nativeEvent.text));
  }

  render() { 
    return ( 
      <View style={Styles.inputContainer}>
        <TextInput style={Styles.input} onChange={this.inputValueChanged.bind(this)}></TextInput>
        <Text>{this.props.text}</Text>
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
    width: width,
    paddingLeft: 5,
    paddingRight: 5
  },
  inputContainer: {
    justifyContent: 'center',
    padding: 0,
    marginTop: 70,
    width: width,
    alignItems: 'center',
    borderColor: '#CCC'
  }
});
