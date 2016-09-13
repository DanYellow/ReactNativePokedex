import React, { Component, PropTypes } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
}
from 'react-native';

import { Utils } from '../../utils'

export default class PkmnAbilities extends Component { 
  constructor(props, context) { 
    super(props, context); 
  }

  render() {
    return (
      <View style={ Styles.abilitiesContainer }>
        <Text style={{ flex:1, alignItems: 'flex-start', alignSelf: 'flex-start', fontSize: 18, alignSelf:'stretch' }}>Abilities</Text>
        <View style={ Styles.abilities }>
          {this.props.abilities.map((ability, index) =>
            <Text key={index} style={{ paddingBottom: 14, backgroundColor: 'transparent' }}>{ ability.ability.name.capitalizeFirstLetter() }</Text>
          )}
        </View>
      </View>
    ) 
  } 
}

const Styles = StyleSheet.create({
  abilitiesContainer: {
    marginTop: 10,
    alignSelf:'stretch',
  },
  abilities: {
    flex:1, 
    alignItems: 'flex-start', 
    justifyContent: 'space-around', 
    flexDirection:'column',
  }
});
