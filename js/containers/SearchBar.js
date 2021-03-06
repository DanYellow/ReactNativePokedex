import React from 'react'
import { connect } from 'react-redux'

import SearchBar from '../components/SearchBar'
import { searchPkmn, filterFavoritesPkmn } from '../actions'
import { getFilteredPokemon } from '../selectors'


function mapStateToProps(state) {
  return {
    pkmns: state.pkmns,
    filteredPkmns: getFilteredPokemon(state),
    searchTerm: state.search
  }
}

const mapDispatchToProps = {
  searchPkmn,
  filterFavoritesPkmn
}


var SearchBarContainer = connect(mapStateToProps, mapDispatchToProps)(SearchBar)

export default SearchBarContainer
