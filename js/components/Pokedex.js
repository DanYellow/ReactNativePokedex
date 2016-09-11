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

import * as Helpers from '../utils'

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
    for (var i = 1; i < 43; i++) {
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
        underlayColor={'#ffa7a7'} 
        style={[styles.collectionItem, collectionItemBorder(datas.typesString[0])]} 
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
      if (this.props.search) {
        return (
          <View style={styles.loader}>
            <Image source={require('../img/pokdex-no-results.gif')} />
            <Text>No results</Text>
          </View>
        )
      } else {
        return (
          <View style={styles.loader}>
            <Image source={require('../img/pokedex-loader.gif')} />
            <Text>Loading</Text>
          </View>
        )
      }
      
    }
  }
}

var collectionItemBorder = function (type) {
  return {
    borderColor: Helpers.Utils.typeColor(type)
  }
}

const styles = StyleSheet.create({
  collection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 20,
    paddingHorizontal: 1,
  },
  collectionItem: {
    margin: 3,
    width: (width / 3.20),
    height: (width / 3.20),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5
  },
  text: {
    textAlign: 'center'
  },
  listView: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#f1f1f1'
  },
  loader: {
    flex: 1,
    alignItems: 'center'
  }
});


