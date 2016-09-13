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

    var pkmnThumb = null;
    if (datas.sprites) {
      pkmnThumb = <Image style={{width: 75, height: 75}} source={{uri: datas.sprites.front_default }} />
    }

    var pkmnName = "NO NAME";
    if (datas.name) {
      pkmnName = datas.name;
    }

    return ( 
      <View ref={component => this._root = component} {...this.props} >
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          { pkmnThumb }
        </View>
        <Text style={styles.text}>{pkmnName.capitalizeFirstLetter()}</Text>
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
