import React from 'react'
import { connect } from 'react-redux'

import _ from 'lodash'


import Pokedex from '../components/Pokedex'

const filterPkmns = (pkmns, filter = '') => {
  pkmns = _.map(pkmns, getArrayTypes);
  
  if (filter.trim() == "") {
    return pkmns;
  } else {
    return pkmns.filter(function(pkmn) {
      return pkmn.datas.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
    })
  }
}

const getArrayTypes = (pkmn) => {
  pkmn.datas.typesString = _.reverse(_.map(pkmn.datas.types, 'type.name'));

  if (pkmn.datas.typesString.length == 2) {
    pkmn.datas.typesString[1] = pkmn.datas.typesString[1] + '-border'
  }
  return pkmn;
}

function mapStateToProps(state) {
  return {
    pkmns: _.sortBy(filterPkmns(state.pkmns, state.search.text), function(o) { return o.id; })
  }
}

// Crée alias de dispatch
function mapDispatchToProps(dispatch) {
  return fetchPkmn;
}

var PokedexContainer = connect(mapStateToProps)(Pokedex)

export default PokedexContainer
