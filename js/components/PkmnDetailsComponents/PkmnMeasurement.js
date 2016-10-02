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
    const height = (this.props.height * .1).toFixed(2);
    const weight = (this.props.weight * .1).toFixed(2);

    return (
      <View>
        <Text style={{ alignItems: 'flex-start', fontSize: 18, paddingBottom: 9, }}>Measurement</Text>
        <Text>
          Height: { height } m | { Utils.unitConvertion( {'value': height, 'unit': 'length'} ) } ft {"\n"}
          Weight: { weight } kg | { Utils.unitConvertion( {'value': weight, 'unit': 'weight'} ) } lbs
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
