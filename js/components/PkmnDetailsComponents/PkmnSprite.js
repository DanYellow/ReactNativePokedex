import React, { Component, PropTypes } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Image
}
from 'react-native';

export default class PkmnSprite extends Component { 
  constructor(props, context) { 
    super(props, context);

    this.isFemaleSprite = this._isFemaleSprite(this.props.image)
  }

  sexSign () {
    if (this.isFemaleSprite) {
      return '♀'
    } else {
      return '♂'
    }
  }

  _isFemaleSprite (path) {
    if (!path) {
      return false;
    }

    if (path.indexOf('female') > -1) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    if (!this.props.image) {
      return null;
    }

    return (
      <View style={{
          flexDirection:'column', 
          alignItems: 'center',
          justifyContent: 'flex-start',
          flex: 0.5
        }}>
        <Image
          style={{width: 90, height: 90}}
          source={{uri: this.props.image }}
          resizeMode='contain'
        />
        <Text style={[styles[this.isFemaleSprite ? 'female' : 'male'], styles.sign]}>{this.sexSign()}</Text>
      </View>
    ) 
  } 
}


const styles = StyleSheet.create({
  sign: { 
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',

  },
  male: {
    color: '#35f'
  },
  female: {
    color: '#f7d'
  }
});
