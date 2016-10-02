import React, { Component, PropTypes } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  TouchableWithoutFeedback
}
from 'react-native';

export default class PkmnSprite extends Component { 
  constructor(props, context) { 
    super(props, context);

    this.isFemaleSprite = this._isFemaleSprite(this.props.image);
    this.state = {
      displayShinySprite: false
    }
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

  _onPressSprite () {
    this.setState({ displayShinySprite: !this.state.displayShinySprite })
  }

  render() {
    if (!this.props.image) {
      return null;
    }

    let spriteComponent = <Image
          style={{width: 90, height: 90}}
          source={{uri: this.props.image }}
        />
    if (this.state.displayShinySprite) {
      spriteComponent = <Image
          style={{width: 90, height: 90}}
          source={{uri: this.props.imageShiny }}
        />
    }

    return (
      <TouchableWithoutFeedback
        onPress={this._onPressSprite.bind(this)}
      >
      <View style={{
          flexDirection:'column', 
          alignItems: 'center',
          justifyContent: 'flex-start',
          flex: 0.5
        }}>

        { spriteComponent }
        
        <Text style={[styles[this.isFemaleSprite ? 'female' : 'male'], styles.sign]}>{this.sexSign()}</Text>
      </View>
      </TouchableWithoutFeedback>
    ) 
  } 
}


const styles = StyleSheet.create({
  sign: { 
    fontSize: 25,
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
