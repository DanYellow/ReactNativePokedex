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
    return ( 
      <View style={{ marginTop: 0, marginBottom: 5 }}>
        <Image
          source={this._getCoverGame(this.props.name)} 
          style={{width: 100, height: 100}}
          resizeMode={'contain'}
        />
      </View>
    ) 
  }

  _getCoverGame (name) {
    switch(name) {
      case 'red':
        return require('../../img/games_cover/red.png');
      case 'blue':
        return require('../../img/games_cover/blue.png');
      case 'alpha-sapphire':
        return require('../../img/games_cover/alpha-sapphire.png');
      case 'black-2':
        return require('../../img/games_cover/black-2.png');
      case 'black':
        return require('../../img/games_cover/black.png');
      case 'crystal':
        return require('../../img/games_cover/crystal.png');
      case 'diamond':
        return require('../../img/games_cover/diamond.png');
      case 'emerald':
        return require('../../img/games_cover/emerald.png');
      case 'firered':
        return require('../../img/games_cover/firered.png');
      case 'gold':
        return require('../../img/games_cover/gold.png');
      case 'heartgold':
        return require('../../img/games_cover/heartgold.png');
      case 'leafgreen':
        return require('../../img/games_cover/leafgreen.png');
      case 'moon':
        return require('../../img/games_cover/moon.png');
      case 'omega-ruby':
        return require('../../img/games_cover/omega-ruby.png');
      case 'ruby':
        return require('../../img/games_cover/ruby.png');
      case 'pearl':
        return require('../../img/games_cover/pearl.png');
      case 'platinum':
        return require('../../img/games_cover/platinum.png');
      case 'sapphire':
        return require('../../img/games_cover/sapphire.png');
      case 'silver':
        return require('../../img/games_cover/silver.png');
      case 'soulsilver':
        return require('../../img/games_cover/soulsilver.png');
      case 'sun':
        return require('../../img/games_cover/sun.png');
      case 'white-2':
        return require('../../img/games_cover/white-2.png');
      case 'white':
        return require('../../img/games_cover/white.png');
      case 'x':
        return require('../../img/games_cover/x.png');
      case 'y':
        return require('../../img/games_cover/y.png');
      case 'yellow':
        return require('../../img/games_cover/yellow.png');
      default:
        return require('../../img/games_cover/yellow.png');
        break;
    }
  }
}
