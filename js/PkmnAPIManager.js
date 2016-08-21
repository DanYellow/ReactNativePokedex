export default class PkmnAPIManager {
  constructor () {

    this.kantoRange  = { 'name': 'kanto', 'range': [1, 151], 'generation': 'First generation' }
    this.johtoRange  = { 'name': 'johto', 'range': [152, 251], 'generation': 'Second generation' };
    this.hoennRange  = { 'name': 'hoenn', 'range': [252, 386], 'generation': 'Third generation' };
    this.sinnohRange = { 'name': 'sinnoh', 'range': [387, 493], 'generation': 'Fourth generation' };
    this.unysRange   = { 'name': 'unys', 'range': [494, 649], 'generation': 'fifth generation' };
    this.kalosRange  = { 'name': 'kalos', 'range': [650, 721], 'generation': 'Sixth generation' };
    
    this.regions = [this.kantoRange, this.johtoRange, this.hoennRange, 
                    this.sinnohRange, this.unysRange, this.kalosRange];
    this.rootURL = 'http://pokeapi.co/api/v2';
  }

  fetchPkmn (idDex) {
    
    // return 
    //   fetch(`${this.rootURL}/pokemon/${idDex}/`)
    //   .then((pkmn) => {
    //     console.log("pkmn");
    //     return pkmn; 
    //   })
    //   .catch((error) => { console.log("error"); });
    // return fetch('http://facebook.github.io/react-native/movies.json')
    //   .then((response) => response.json())
    //   .then((responseJson) => { console.log(responseJson.movies); return responseJson.movies; })
    //   .catch((error) => { console.error(error); });

    url = "http://facebook.github.io/react-native/movies.json"
    url = "http://api.nestoria.co.uk/api?country=uk&pretty=1&encoding=json&listing_type=buy&zction=search_listings&page=1&place_name=london"
    url = `${this.rootURL}/pokemon/${idDex}/`
    console.log("fetchPkmn", url)
    return fetch(url)
      .then(response => response.json())
      .then(json => this._handleResponse(json.response))
      .catch(error =>
        console.log(error)  
      );
  }
}
