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
import PkmnMeasurement from './PkmnDetailsComponents/PkmnMeasurement'
import PkmnAbilities from './PkmnDetailsComponents/PkmnAbilities'



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
        contentContainerStyle={{ 
          paddingVertical: 20,
          paddingHorizontal: 5
        }}>
          <View style={{flex:1, flexDirection:'row', justifyContent:'flex-start', alignItems: 'flex-start'}}>
            <View style={{flex:0.25, alignItems: 'center'}}>
                <PkmnSprite image={ pkmnDatas.sprites.front_default } />
                <PkmnSprite image={ pkmnDatas.sprites.front_female } />
            </View>

            <View style={{flex:.5, alignItems: 'flex-start'}}>
              <Text style={ Styles.pkmnName }>#{ pkmnDatas.id } | { pkmnDatas.name.capitalizeFirstLetter() }</Text>

              <View style={ Styles.typeContainer }>
                {pkmnDatas.typesString.map((type, index) =>
                  <PkmnType name={type} key={index}/>
                )}
              </View>
              <PkmnMeasurement {...{weight: pkmnDatas.weight, height: pkmnDatas.height }} />
              <PkmnAbilities {...{abilities: pkmnDatas.abilities }} />
            </View>

          </View>
                    
      </ScrollView>
    ) 
  } 
}

var {height, width} = Dimensions.get('window');


const Styles = StyleSheet.create({
  typeContainer: {
    flex:0, 
    alignItems: 'flex-start', 
    flexDirection:'row',
    marginTop: 5,
    marginBottom: 10,
  },
  pkmnName: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
