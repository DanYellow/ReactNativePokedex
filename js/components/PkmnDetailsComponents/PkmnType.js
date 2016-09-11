import React, { Component, PropTypes } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
}
from 'react-native';

export default class PkmnType extends Component { 
  constructor(props, context) { 
    super(props, context); 
  }

  render() {
    return (
      <View style={{
        flex: .5,
        alignSelf: 'center',
      }}>
        <Text style={[styles[this.props.name], styles.typeName]}>
          {this.props.name}
        </Text>
      </View>
    ) 
  } 
}


const styles = StyleSheet.create({
  typeName: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5
  },
  grass: {
    backgroundColor: '#77c84f'
  },
  fire: {
    backgroundColor: '#f07f2f'
  },
  poison: {
    backgroundColor: 'purple'
  },
  water: {
    backgroundColor: 'blue'
  },
  normal: {
    backgroundColor: '#a7a777'
  },
  bug: {
    backgroundColor: '#a7b71f'
  },
  ice: {
    backgroundColor: '#97d8d8'
  },
  flying: {
    backgroundColor: '#a78ff0'
  },
  fairy: {
    backgroundColor: '#e4a1e1'
  },
  dragon: {
    backgroundColor: '#6f37f8'
  },
  electric: {
    backgroundColor: '#f8d02f'
  },
  psychic: {
    backgroundColor: '#f85787'
  },
  ground: {
    backgroundColor: '#e0bf67'
  },
  ghost: {
    backgroundColor: '#6f5797'
  },
  dark: {
    backgroundColor: '#6f5747'
  },
  rock: {
    backgroundColor: '#b79f37'
  }

});
