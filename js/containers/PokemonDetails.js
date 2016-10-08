import React from 'react'
import { connect } from 'react-redux'


import { toggleFavoritePkmn } from '../actions'
import PokemonDetails from '../components/PokemonDetails'




function mapStateToProps(state) {
  return {
    pkmns: state.pkmns,
  }
}

// Create a dispatch alias for its component class
function mapDispatchToProps(dispatch) {
  return {
    toggleFavoritePkmn
  }
}


var PokemonDetailsContainer = connect(
  null,
  mapDispatchToProps()
)(PokemonDetails)

export default PokemonDetailsContainer
