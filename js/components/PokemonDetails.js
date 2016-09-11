import React, { Component, PropTypes } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Dimensions,
  ScrollView,
  Image
   } 
from 'react-native';

import _ from 'lodash'

import PkmnType from './PkmnDetailsComponents/PkmnType'
import GameVersion from './PkmnDetailsComponents/GameVersion'
import PkmnSprite from './PkmnDetailsComponents/PkmnSprite'



export default class PokemonDetails extends Component { 
  constructor(props, context) { 
    super(props, context); 
  }

  _versionAppareances (datas) {
    return _.map(datas, 'version.name')
  }

  render() {
    const pkmnDatas = this.props.pkmn;
    // this._displayTypes(pkmnDatas.typesString);
    // console.log(this._versionAppareances(pkmnDatas.game_indices))
    return (
      <ScrollView
        contentContainerStyle={{ paddingVertical: 20 }}
      >
        <Text style={{ 
          fontSize: 20,
          textAlign: 'center' }}>
            #{pkmnDatas.id}
        </Text>

        <View style={{
            justifyContent: 'center',
            flexDirection: 'row',
            flex: 1, 
          }}>
            <PkmnSprite image={pkmnDatas.sprites.front_default} />
            <PkmnSprite image={pkmnDatas.sprites.front_female} />
        </View> 
        <View style={{
          flexDirection: 'row',
          flex: .5,
          alignItems: 'center',
          paddingLeft: 50,
          paddingRight: 50,
        }}>
          {pkmnDatas.typesString.map((type, index) =>
            <PkmnType name={type} key={index}/>
          )}
        </View>
      </ScrollView>
    ) 
  } 
}

var {height, width} = Dimensions.get('window');


const Styles = StyleSheet.create({
  input: {
    fontSize: 20,
    textAlign: 'left',
    color: 'black',
    height: 40, 
    borderColor: 'black',
    borderWidth: 1,
    flex: 0.6,
    padding: 5,
    marginBottom: 10,
    backgroundColor: '#FFF'
  },
  inputContainer: {
    padding: 0,
    marginTop: 65,
    alignSelf: 'stretch',
    backgroundColor: '#F00',
    padding: 5,
  }
});
