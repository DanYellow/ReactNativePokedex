import { combineReducers } from 'redux'
import _ from 'lodash'

import * as ActionTypes from '../constants/ActionTypes'


/**
 * Retrive a linearize array of Pokemon's type
 * @param  {Object} pkmn A Pokemon's datas
 * @return {Object}      A Pokemon's datas with new key "typesString"
 */
const getArrayTypes = (pkmn) => {
  pkmn.datas.typesString = _.reverse(_.map(pkmn.datas.types, 'type.name'));

  return pkmn;
}


const pkmns = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PKMN:
      if (state.some(function(e){ return e.id == action.datas.id; })) {
        return state;
      }
      return _.map(_.sortBy([
        ...state,
        { id: action.id, datas: action.datas }
      ], function(pkmn) { return pkmn.id; }), getArrayTypes);
    case ActionTypes.FILTER_PKMN:
      return state;
    default:
      return state;
  }
}


const search = function (state = '', action) {
  switch (action.type) {
    case ActionTypes.FILTER_PKMN:
      return action.text;
    default:
      return state;
  }
}


const pkmn = function (state = {}, action) {
  switch (action.type) {
    case ActionTypes.DETAILS_PKMN:
      let pkmn = { ...action.datas }
      // Add missing game covers from API
      pkmn.game_indices = [
        {"version":{"url":"http://pokeapi.co/api/v2/version/22/","name":"sun"},"game_index":5},
        {"version":{"url":"http://pokeapi.co/api/v2/version/22/","name":"moon"},"game_index":5},
        {"version":{"url":"http://pokeapi.co/api/v2/version/22/","name":"omega-ruby"},"game_index":5},
        {"version":{"url":"http://pokeapi.co/api/v2/version/22/","name":"alpha-sapphire"},"game_index":5},
        {"version":{"url":"http://pokeapi.co/api/v2/version/22/","name":"x"},"game_index":5},
        {"version":{"url":"http://pokeapi.co/api/v2/version/22/","name":"y"},"game_index":5},
        ...pkmn.game_indices
      ]
      return { datas: pkmn };
    default:
      return state;
  }
}


const isLoadingPkmn = function (state = false, action) {
  switch (action.type) {
    case ActionTypes.LOADING_PKMN:
      return true;
    case ActionTypes.ENDLOADING_PKMN:
      return false;
    default:
      return false;
  }
}


const manageFavoritesPkmn = function (state = [], action) {
  switch (action.type) {
    case ActionTypes.TOGGLE_FAVORITE_PKMN:
      if (state.indexOf(action.id) > -1) {
        return state.filter(fav =>
          fav !== action.id
        );
      } else {
        return [...state, action.id];
      }
    default:
      return state;
  }
}

/**
 * Retrieve the current state of segmented control (0: Show every thing, 1: Show only favorites Pokemon)
 * @param  {Number} state  Current state of segemented control of Pokedex
 * @param  {Object} action 
 * @return {Number}        [description]
 */
const filterFavoritesPkmn = (state = 0, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_SEGCONTROL_PKMN:
      return action.id;
    default: 
      return 0;
  }
}


const reducers = combineReducers({
  pkmns,
  search,
  pkmn,
  isLoadingPkmn,
  favoritesPkmnIndex: manageFavoritesPkmn,
  segmentedControlIndex: filterFavoritesPkmn
});


export default reducers
