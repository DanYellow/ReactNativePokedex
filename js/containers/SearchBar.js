import React from 'react'
import { connect } from 'react-redux'

import SearchBar from '../components/SearchBar'

function mapStateToProps(state) {
  return {
    text: state.search.text,
    pkmns: state.pkmns
  }
}

var SearchBarContainer = connect(mapStateToProps)(SearchBar)

export default SearchBarContainer
