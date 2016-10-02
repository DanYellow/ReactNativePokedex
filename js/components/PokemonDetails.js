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

import * as Helpers from '../utils'

export default class PokemonDetails extends Component { 
  constructor(props, context) { 
    super(props, context); 
  }

  _versionAppareances (datas) {
    return _.map(datas, 'version.name');
  }

  render() {
    const pkmnDatas = this.props.pkmn;

    return (
      <ScrollView
        contentContainerStyle={{ 
          paddingVertical: 20,
          paddingHorizontal: 5
        }}>
          <View style={{flexDirection:'column', 
            justifyContent:'flex-start', alignItems: 'center', 
            borderBottomColor: Helpers.Utils.typeColor(pkmnDatas.typesString[0]), borderBottomWidth: 1,
            paddingBottom: 15, alignSelf: 'stretch' }}>
            <View style={{flex:1, alignItems: 'center', flexDirection:'row'}}>
                <PkmnSprite image={ pkmnDatas.sprites.front_default } imageShiny={ pkmnDatas.sprites.front_shiny } />
                <PkmnSprite image={ pkmnDatas.sprites.front_female } imageShiny={ pkmnDatas.sprites.front_shiny_female } />
            </View>

            <View style={{ alignItems: 'center', alignSelf: 'stretch', }}>
              <Text style={ Styles.pkmnName }>#{ pkmnDatas.id } | { pkmnDatas.name.capitalizeFirstLetter() }</Text>
              <View style={ Styles.typeContainer }>
                {pkmnDatas.typesString.map((type, index) =>
                  <PkmnType name={type} key={Date.now() + index}/>
                )}
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'space-around', alignSelf: 'stretch' }}>
                <PkmnMeasurement style={{ flex: .5 }} {...{weight: pkmnDatas.weight, height: pkmnDatas.height }} />
                <PkmnAbilities style={{ flexDirection: .5 }} {...{abilities: pkmnDatas.abilities }} />
              </View>
            </View>
          </View>

            <Text style={{ fontSize: 23, padding: 9 }}>Appears in </Text>
            <View style={Styles.gameCoversContainer}>
              {pkmnDatas.game_indices.map((data, index) =>
                <GameVersion name={data.version.name} key={Date.now() + index}/>
              )}
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
  },
  gameCoversContainer: {
    flexDirection:'row', 
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
});
