import React, { Component, PropTypes } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
}
from 'react-native';

import { Utils } from '../../utils'

export default class PkmnMeasurement extends Component { 
  constructor(props, context) { 
    super(props, context); 
  }

  render() {
    return (
      <View>
        <Text>
          Height: {this.props.height} ft | { Utils.unitConvertion( {'value': this.props.height, 'unit': 'length'} ) } cm {"\n"}
          Weight: {this.props.weight} lbs | { Utils.unitConvertion( {'value': this.props.weight, 'unit': 'weight'} ) } kg
        </Text>
      </View>
    ) 
  } 
}

var typeNameStyle = function(type) {
  return {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 5,
    paddingRight: 5,
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
