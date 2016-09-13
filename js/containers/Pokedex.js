import React from 'react'
import { connect } from 'react-redux'

import _ from 'lodash'


import Pokedex from '../components/Pokedex'

var searchValue = '';
var typeSearch = ''

const filterPkmns = (pkmns, filter = '') => {
  pkmns = _.map(pkmns, getArrayTypes);
  pkmns = _.map(pkmns, getVersionsAppareance);
  
  if (filter.trim() == "") {
    return pkmns;
  } else {
    searchValue = filter.toLowerCase()

    if ((new RegExp(/^\d+$/).test(searchValue))) {
      return pkmns.filter(function(pkmn) {
        if (!pkmn.datas.id) { return; }
        return pkmn.datas.id == searchValue;
      });
    } else {
      switch (true) {
        case (searchValue.indexOf('type') > -1):
          typeSearch = searchValue.split(':')[1] || "null"
          return pkmns.filter(function(pkmn) {
            if (!pkmn.datas.typesString) { return; }
            return pkmn.datas.typesString.indexOf(typeSearch) > -1;
          })
          break;
        default:
          return pkmns.filter(function(pkmn) {
            if (!pkmn.datas.name) { return; }
            return pkmn.datas.name.toLowerCase().indexOf(searchValue) > -1;
          });
          break;
      }
    }
  }
}


/**
 * Retrieve in a string array of current Pokemon type
 * @param  {Object} pkmn A Pokemon datas
 * @return {Array<String>} List of current Pokemon type
 */
const getArrayTypes = (pkmn) => {
  pkmn.datas.typesString = _.reverse(_.map(pkmn.datas.types, 'type.name'));

  return pkmn;
}

/**
 * Retrieve in a string array of every Pokemon game where the current Pokemon appears
 * @param  {Object} pkmn A Pokemon datas
 * @return {Array<String>} List of every Pokemon game
 */
const getVersionsAppareance = (pkmn) => {
  pkmn.datas.games = _.reverse(_.map(pkmn.datas.game_indices, 'version.name'));

  return pkmn;
}

function mapStateToProps(state) {
  return {
    pkmns: _.sortBy(filterPkmns(state.pkmns, state.search.text), function(o) { return o.id; }),
    // pkmns: state.pkmns,
    search: state.search.text,
    isFinishLoaded: state.fetchStatus.isAllRendered
  }
}


var PokedexContainer = connect(mapStateToProps)(Pokedex)

export default PokedexContainer
