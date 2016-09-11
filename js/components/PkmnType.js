import React, { Component, PropTypes } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
}
from 'react-native';

export default class PkmnType extends Component { 
  constructor(props, context) { 
    super(props, context); 
  }

  render() {
    return ( 
      <Text style={[styles[this.props.name], styles.typeName]}>
        {this.props.name}
      </Text>
    ) 
  } 
}


const styles = StyleSheet.create({
  typeName: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 3
  },
  grass: {
    backgroundColor: '#77c84f'
  }
});
