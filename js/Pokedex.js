import React, { Component, PropTypes } from 'react';
import { 
  ListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native'; 

import Pokemon from './Pokemon';
import PkmnAPIManager from './PkmnAPIManager';

export default class Pokedex extends Component { 
  constructor(props) {
    var pkmnAPIManager = new PkmnAPIManager()

    pkmnAPIManager.fetchPkmn(1)

    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }

  render() {
    return (
    <ListView
      contentContainerStyle={styles.list}
      dataSource={this.state.dataSource}
      renderRow={(rowData) => <Pokemon title={rowData} />}
    />
  )}
}

const styles = StyleSheet.create({
  list: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch'
  }
});


