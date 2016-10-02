import React, { Component, PropTypes } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
}
from 'react-native';

import { Utils } from '../../utils'

export default class PkmnType extends Component { 
  constructor(props, context) { 
    super(props, context); 
  }

  render() {
    return (
      <View style={typeNameStyle(this.props.name)}>
        <Text style={styles.typeName}>
          {this.props.name.capitalizeFirstLetter()}
        </Text>
      </View>
    ) 
  } 
}

var typeNameStyle = function(type) {
  return {
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: Utils.typeColor(type),
    borderRadius: 5,
    marginRight: 5
  }
}


const styles = StyleSheet.create({
  typeName: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  }
});
