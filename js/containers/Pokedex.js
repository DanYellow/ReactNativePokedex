import React from 'react'
import { connect } from 'react-redux'


import { fetchPkmn, loadingPkmn, toggleFavoritePkmn } from '../actions'
import Pokedex from '../components/Pokedex'
import { getFilteredPokemon, getFavoritesPkmn } from '../selectors/'




function mapStateToProps(state) {
  return {
    pkmns: state.pkmns,
    filteredPkmns: getFilteredPokemon(state),
    favoritesPkmn: getFavoritesPkmn(state),
    favoritesPkmnIndex: state.favoritesPkmnIndex,
    
    searchTerm: state.search,
    isLoading: state.isLoadingPkmn,
    segmentedControlIndex: state.segmentedControlIndex
  }
}

// Create a dispatch alias for its component class
function mapDispatchToProps(dispatch) {
  return {
    fetchPkmn,
    loadingPkmn,
    toggleFavoritePkmn
  }
}


var PokedexContainer = connect(
  mapStateToProps,
  mapDispatchToProps()
)(Pokedex)

export default PokedexContainer
