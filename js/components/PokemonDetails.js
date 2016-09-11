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

import PkmnType from './PkmnType'


export default class PokemonDetails extends Component { 
  constructor(props, context) { 
    super(props, context); 
  }

  _displayTypes (typesList) {
    var types = [];
    {typesList.map(type =>
      types.push(<PkmnType name={type} />)
    )}
  
    return types;
  }

  render() {
    const pkmnDatas = this.props.pkmn;
    // this._displayTypes(pkmnDatas.typesString);
    return (
      <ScrollView>
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
              style={{width: 120, height: 120}}
              source={{uri: pkmnDatas.sprites.front_default }}
            />
        </View>
        <View style={{
          flex: .5, 
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>

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
