import React, { Component, PropTypes } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Dimensions,
  Image,
} 
from 'react-native';

import * as name from '../utils'

var {height, width} = Dimensions.get('window');

export default class PokedexItem extends Component { 
  constructor(props, context) { 
    super(props, context);
  }

  setNativeProps(nativeProps) { 
    this._root.setNativeProps(nativeProps); 
  }

  render() {
    const datas = this.props.datas;
    return ( 
      <View ref={component => this._root = component} {...this.props} >
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 75, height: 75}}
            source={{uri: datas.sprites.front_default }}
          />
        </View>
        <Text style={styles.text}>{datas.name.capitalizeFirstLetter()}</Text>
      </View>
    ) 
  } 
}

var {height, width} = Dimensions.get('window');


const styles = StyleSheet.create({
  text: {
    textAlign: 'center'
  }
});
