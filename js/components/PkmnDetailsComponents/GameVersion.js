import React, { Component, PropTypes } from 'react';
import { 
  View, 
  StyleSheet,
  Image
}
from 'react-native';

export default class GameVersion extends Component { 
  constructor(props, context) { 
    super(props, context); 
  }

  render() {
    // const url =  require(`../../img/games_cover/${this.props.name}.png`);
    // console.log(`../../img/games_cover/${this.props.name}.png`)
    return ( 
      <View style={{ marginTop: 0 }}>
        <Image 
          source={require('../../img/games_cover/white-2.png')} 
          style={{width: 100, height: 100}}
          resizeMode={'contain'}
        />
      </View>
    ) 
  } 
}
