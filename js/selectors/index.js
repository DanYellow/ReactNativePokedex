import { createSelector } from 'reselect'


let searchValue = '';
let typeSearch = '';

/**
 * Filter pkmn datas
 * @param  {Array<Object>} pkmns  List of Pokemon retrieve from API
 * @param  {String} filter Value to test for filter
 * @return {Array<Object>}        Filtered datas
 */

const filterPkmns = (pkmns, filter = '') => {  
  if (filter.trim() == "") {
    return pkmns;
  } else {
    searchValue = filter.toLowerCase();

    if ((new RegExp(/^\d+$/).test(searchValue))) {
      // Search by id
      return pkmns.filter(function(pkmn) {
        if (!pkmn.datas.id) { return; }
        return pkmn.datas.id == searchValue;
      });
    } else if ((new RegExp(/^tseho$/gi).test(searchValue))) {
      // Return only 1G Pokemon
      return pkmns.filter(function(pkmn) {
        if (!pkmn.datas.id) { return; }
        return pkmn.datas.id < 152;
      });
    } else {
      switch (true) {
        // Search by type
        case (searchValue.indexOf('type') > -1):
          typeSearch = searchValue.split(':')[1] || "null"
          return pkmns.filter(function(pkmn) {
            if (!pkmn.datas.typesString) { return; }
            return pkmn.datas.typesString.indexOf(typeSearch) > -1;
          })
          break;
        default:
          // Search by name
          return pkmns.filter(function(pkmn) {
            if (!pkmn.datas.name) { return; }
            return pkmn.datas.name.toLowerCase().indexOf(searchValue) > -1;
          });
          break;
      }
    }
  }
}


const getPokemon = (state) => state.pkmns;
const getSearch = (state) => state.search;

export const getFilteredPokemon = createSelector(
  [ getPokemon, getSearch ],
  (pokemons, search) => {
    return filterPkmns(pokemons, search)
  }
)


const filterFavoritesPkmns = (pkmns, favorites) => {
  return pkmns.filter(function(pkmn) {
    return favorites.indexOf(pkmn.datas.id) > -1;
  })
}

const getFavorites = (state) => state.favoritesPkmnIndex;

export const getFavoritesPkmn = createSelector(
  [ getPokemon, getFavorites ],
  (pokemons, favorites) => {
    return filterFavoritesPkmns(pokemons, favorites)
  }
)