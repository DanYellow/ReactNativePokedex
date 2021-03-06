import _ from 'lodash'
import * as ActionTypes from '../constants/ActionTypes'


export const searchPkmn = function (text) {
  return {
    type: ActionTypes.FILTER_PKMN,
    text
  }
}


export const receivePkmn = function (id, json) {
  return {
    type: ActionTypes.FETCH_PKMN,
    id,
    datas: json
  }
}

export const detailsPkmn = function (datas) {
  return {
    type: ActionTypes.DETAILS_PKMN,
    datas
  }
}

const isFinishLoadingDebounce = _.debounce(isFinishLoading, 3500, { 'trailling': true, 'leading': true });

export const fetchPkmn = function (idDex) {
  return dispatch => {
    dispatch({ type: ActionTypes.LOADING_PKMN });
    
    return fetch(`http://pokeapi.co/api/v2/pokemon/${idDex}/`, { 'cache': 'force-cache' })
      .then(response => response.json())
      .then(function(json) {
        isFinishLoadingDebounce();
        return dispatch(receivePkmn(idDex, json))
      })
  }
}

function isFinishLoading() {
  return dispatch => {
    dispatch({ type: ActionTypes.ENDLOADING_PKMN });
  }
}

export const loadingPkmn = function (isLoading) {
  return {
    type: ActionTypes.LOADING_PKMN
  }
}

export const toggleFavoritePkmn = function (id) {
  return {
    type: ActionTypes.TOGGLE_FAVORITE_PKMN,
    id
  }
}


export const filterFavoritesPkmn = (id) => {
  return {
    type: ActionTypes.CHANGE_SEGCONTROL_PKMN,
    id
  }
}
