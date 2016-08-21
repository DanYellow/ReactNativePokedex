import React, { Component, PropTypes } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Dimensions } 
from 'react-native';

var {height, width} = Dimensions.get('window');

console.log(height, width, Dimensions.get('window'))

export default class Pokemon extends Component { 
  static propTypes = { 
    title: PropTypes.string.isRequired, 
  } 

  constructor(props, context) { 
    super(props, context); 
  } 

  render() { 
    return ( 
      <View style={Styles.cell}>
        <Text style={Styles.welcome} >{this.props.title}.</Text>
      </View>
    ) 
  } 
}

const Styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black'
  },
  cell: {
    justifyContent: 'center',
    padding: 5,
    margin: 3,
    width: (width / 3.20),
    height: (width / 3.20),
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC'
  }
});


