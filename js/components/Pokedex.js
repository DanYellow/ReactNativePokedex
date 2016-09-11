import React, { Component, PropTypes } from 'react';
import { 
  ListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';

import * as name from '../utils'

import PokedexItem from './PokedexItem'
import PokemonDetails from './PokemonDetails'

var {height, width} = Dimensions.get('window');


import { fetchPkmn } from '../actions'

export default class Pokedex extends Component { 
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }

  setNativeProps(nativeProps) { 
    this._root.setNativeProps(nativeProps); 
  }

  componentWillMount() {
    for (var i = 1; i < 4; i++) {
      this.props.dispatch(fetchPkmn(i));
    }
  }

  _onPressButton(rowID, rowData) {
    const pkmnDatas = rowData.datas;
    this.props.navigator.push({
      title: pkmnDatas.name.capitalizeFirstLetter(),
      component: PokemonDetails,
      passProps: {
        pkmn: pkmnDatas
      }
    })
  }

  _renderRow (rowData, sectionID, rowID) {
    const datas = rowData.datas;

    return (
       <TouchableHighlight 
        underlayColor={'#f00'} 
        style={styles.collectionItem} 
        accessibilityLabel={datas.name}
        onPress={this._onPressButton.bind(this, rowID, rowData)}>
          <PokedexItem datas={datas}/>
          
      </TouchableHighlight>
    )
  }

  _renderRowT (rowData, sectionID, rowID) {
    return (
      <Text>{rowData}</Text>
    )
  }

  render() {
    if (this.props.pkmns.length) {
      return (
        <ListView
          contentContainerStyle={styles.collection}
          style={styles.listView} 
          dataSource={this.ds.cloneWithRows(this.props.pkmns)}
          initialListSize={1}
          keyboardDismissMode='on-drag'
          // renderRow={this._renderRowT}
          renderRow={this._renderRow.bind(this)}
          showsVerticalScrollIndicator={true}
          automaticallyAdjustContentInsets={false}
          onContentSizeChange={this._contentSizeChanged}
        />
      )
    } else {
      return (
        <Text>Loading</Text>
      )
    }
  }
}

const styles = StyleSheet.create({
  collection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 20,
  },
  collectionItem: {
    margin: 3,
    width: (width / 3.20),
    height: (width / 3.20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center'
  },
  listView: {
    flex:1,
    flexDirection: 'column',
  }
});


