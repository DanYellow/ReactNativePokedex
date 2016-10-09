import React from 'react'
import { connect } from 'react-redux'


import { toggleFavoritePkmn } from '../actions'
import PokemonDetails from '../components/PokemonDetails'

import { getFilteredPokemon, getFavoritesPkmn } from '../selectors/'




function mapStateToProps(state, ownProps) {
  return {
    pkmnExtras: state.pkmn,
    navigator: ownProps.navigator,
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
