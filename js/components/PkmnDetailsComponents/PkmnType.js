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
      <View style={{
        flex: .5,
        alignSelf: 'center',
      }}>
        <Text style={foo(this.props.name)}>
          {this.props.name}
        </Text>
      </View>
    ) 
  } 
}

var foo = function(type) {
  return {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
    backgroundColor: Utils.typeColor(type)
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
    borderRadius: 5
  }
});
