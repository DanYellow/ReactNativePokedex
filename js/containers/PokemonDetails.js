import React from 'react'
import { connect } from 'react-redux'


import { toggleFavoritePkmn } from '../actions'
import PokemonDetails from '../components/PokemonDetails'




function mapStateToProps(state, ownProps) {
  // console.warn("re", JSON.stringify(Object.keys(state.pkmn)))
  return {
    pkmnExtras: state.pkmn, //{...state.pkmn.datas, ...ownProps.pkmn},
    navigator: ownProps.navigator
  }
}

// Create a dispatch alias for its component class
function mapDispatchToProps(dispatch) {
  return {
    toggleFavoritePkmn
  }
}


var PokemonDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps()
)(PokemonDetails)

export default PokemonDetailsContainer
