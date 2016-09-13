import _ from 'lodash'

export const filterPkmns = function (text) {
  return {
    type: 'FILTER_PKMN',
    text
  }
}


export const receivePkmn = function (id, json) {
  return {
    type: 'FETCH_PKMN',
    id: id,
    id,
    datas: json
  }
}

export const detailsPkmn = function (datas) {
  return {
    type: 'DETAILS_PKMN',
    datas: datas
  }
}

export const allPkmnFinishRendering = function (isAllRendered) {
  return {
    type: 'ALL_PKMN_RENDERED',
    isAllRendered
  }
}


export const fetchPkmn = function (idDex) {
  return dispatch => {
    return fetch(`http://pokeapi.co/api/v2/pokemon/${idDex}/`, { 'cache': 'reload' }) // 'force-cache'
      .then(response => response.json())
      .then(function(json) {
        // _.debounce(_debounceRendering, 0);
        // _debounceRendering(dispatch)
        return dispatch(receivePkmn(idDex, json))
      }).catch((error) => { console.error(error); })
  }
}


const _debounceRendering = function (dispatch) {
  dispatch(allPkmnFinishRendering(true))
}