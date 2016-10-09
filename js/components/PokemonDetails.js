import React, { Component, PropTypes } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  NativeModules,
  TouchableHighlight
} 
from 'react-native';

import _ from 'lodash'
import uuid from 'react-native-uuid'

import PkmnType from './PkmnDetailsComponents/PkmnType'
import GameVersion from './PkmnDetailsComponents/GameVersion'
import PkmnSprite from './PkmnDetailsComponents/PkmnSprite'
import PkmnMeasurement from './PkmnDetailsComponents/PkmnMeasurement'
import PkmnAbilities from './PkmnDetailsComponents/PkmnAbilities'
import PkmnTableTypes from './PkmnDetailsComponents/PkmnTableTypes'

import BtnFav from './../containers/BtnFav'

import Player from './custom-components/Player'

import * as Helpers from '../utils'

export default class PokemonDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pkmnDatas = this.props.pkmn;

    <Player />
    const pkmnCryURL = `http://danyellow.ilotreseau.net/pokedex/${pkmnDatas.id}.mp3`;
    return (
      <View style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{ 
            paddingVertical: 20,
            paddingHorizontal: 5
          }}>
            <View style={{flexDirection:'column', 
              justifyContent:'flex-start', alignItems: 'center', 
              borderBottomColor: Helpers.Utils.typeColor(pkmnDatas.typesString[0]), borderBottomWidth: 1,
              paddingBottom: 15, alignSelf: 'stretch', marginBottom: 7 }}>
              <View style={{flex:1, alignItems: 'center', flexDirection:'row'}}>
                  <PkmnSprite image={ pkmnDatas.sprites.front_default } imageShiny={ pkmnDatas.sprites.front_shiny } />
                  <PkmnSprite image={ pkmnDatas.sprites.front_female } imageShiny={ pkmnDatas.sprites.front_shiny_female } />
              </View>
              <Player soundPath={ pkmnCryURL } style={{ alignItems: 'center', alignSelf: 'stretch', backgroundColor: 'transparent', height: 100 }}>
                {/*<Text style={{ fontSize: 23, padding: 90 }}>Appears in </Text> */}
              </Player>

              <View style={{ alignItems: 'center', alignSelf: 'stretch' }}>
                <Text style={ Styles.pkmnName }>#{ pkmnDatas.id } | { pkmnDatas.name.capitalizeFirstLetter() }</Text>
                <View style={ Styles.typeContainer }>
                  {pkmnDatas.typesString.map((type, index) =>
                    <PkmnType name={type} key={uuid.v1()}/>
                  )}
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'space-around', alignSelf: 'stretch' }}>
                  <PkmnMeasurement style={{ flex: .5 }} {...{weight: pkmnDatas.weight, height: pkmnDatas.height }} />
                  <PkmnAbilities style={{ flexDirection: .5 }} {...{abilities: pkmnDatas.abilities }} />
                </View>
              </View>

            </View>
            
            <Text style={Styles.header}>Type effectiveness</Text>
            <PkmnTableTypes weaknessAndImmune={Helpers.Utils.getWeaknessAndImmunes(pkmnDatas.typesString.join('/'))} />
            
            <Text style={Styles.header}>Appears in </Text>
            <View style={Styles.gameCoversContainer}>
              {this.props.pkmnExtras.datas.game_indices.map((data, index) =>
                <GameVersion name={data.version.name} key={uuid.v1()}/>
              )}
            </View>
        </ScrollView>
        <BtnFav pkmnID={pkmnDatas.id} />
      </View>
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
    fontWeight: 'bold',
  },
  gameCoversContainer: {
    flexDirection:'row', 
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 18, 
    padding: 9,
    borderWidth: 1,
    borderColor: '#eb5d5d',
    backgroundColor: '#eb5d5d',
    color: 'white'
  }
});
