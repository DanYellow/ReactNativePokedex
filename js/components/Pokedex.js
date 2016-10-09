import React, { Component, PropTypes } from 'react';
import { 
  ListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ActivityIndicator,
  Alert
} from 'react-native';


import * as Helpers from '../utils';

import PokedexItem from './PokedexItem'
import PokemonDetails from './../containers/PokemonDetails'
// import PokemonDetails from './PokemonDetails'
import LoaderPokedexItems from './LoaderPokedexItems'

var {height, width} = Dimensions.get('window');


import { fetchPkmn } from '../actions'

export default class Pokedex extends Component { 
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id });

    this.lastIndexDex = 20;
    this.maxIndexDex = 721;
    // Debug mode | Work with only one datas
    this.activateInfiniteScroll = true;
  }

  setNativeProps(nativeProps) { 
    this._root.setNativeProps(nativeProps); 
  }

  componentWillMount() {
    for (var i = 1; i < this.lastIndexDex; i++) {
      this.props.fetchPkmn(i);
    }
  }

  _onPressPkmn(rowID, rowData) {
    this.requestAnimationFrame(() => {
      const pkmnDatas = rowData.datas;

      if (pkmnDatas.hasOwnProperty('detail')) {
        Alert.alert( 'Error', 'Too many requests', [ {text: 'OK', onPress: () => console.log('OK Pressed!')}, ] )
        return;
      }

      this.props.detailsPkmn(pkmnDatas);
      this.props.navigator.push({
        title: pkmnDatas.name.capitalizeFirstLetter(),
        component: PokemonDetails,
        passProps: {
          pkmn: pkmnDatas,
          navigator: this.props.navigator
        }
      })
    });
  }

  _renderRow (rowData, sectionID, rowID) {
    const { datas } = rowData;

    var icon = (this.props.favoritesPkmnIndex.indexOf(datas.id) > -1) ? <Image source={require('image!favorite')} style={{width: 20, height: 20, top: 5, left: 5, position: 'absolute', zIndex: 9999 }} /> : null;

    return (
       <TouchableHighlight 
        underlayColor={ Helpers.Utils.typeColor(datas.typesString[0]) + '50' }
        style={[styles.collectionItem, collectionItemBorder(datas.typesString[0])]}
        accessibilityLabel={datas.name}
        onPress={this._onPressPkmn.bind(this, rowID, rowData)}
        >
        <View>
          { icon }
          <PokedexItem datas={datas}/>
        </View>
      </TouchableHighlight>
    )
  }

  onEndReached () {
    return;
    if (this.lastIndexDex >= this.maxIndexDex || this.activateInfiniteScroll == false) {
      return;
    }

    for (var i = this.lastIndexDex; i < this.lastIndexDex + 5; i++) {
      this.props.fetchPkmn(i);
    }
    this.lastIndexDex += 5;
  }

  _renderRowDebug (rowData, sectionID, rowID) {
    return (
       <TouchableHighlight 
        underlayColor={'#ffa7a7'} 
        style={[styles.collectionItem]} 
        >
          <PokedexItem datas={{name: String(rowData.id)}} />
      </TouchableHighlight>
    )
  }

  render() {
    let pkmnsSrc = this.props.pkmns;
    let { searchTerm, filteredPkmns, favoritesPkmn, segmentedControlIndex } = this.props;

    if (filteredPkmns.length > -1 && searchTerm !== '') {
      pkmnsSrc = this.props.filteredPkmns;
    } else if (favoritesPkmn.length > -1 && segmentedControlIndex == 1) {
      pkmnsSrc = this.props.favoritesPkmn;
    }

    if (false && this.props.isLoading) {
      // return this._renderLoading();
      return null;
    } else if (filteredPkmns.length > 0 && !this.props.isLoading) {
      return this._renderPokedex(pkmnsSrc);
    } else if (filteredPkmns.length == 0 && searchTerm !== '') {
      return this._renderNoResultScreen();
    } else {
      return this._renderPokedex(pkmnsSrc);
    }
  }

  _renderNoResultScreen() {
    return (
      <View style={styles.notFound}>
        <Image source={require('../img/pokdex-no-results.gif')} />
        <Text>No results</Text>
      </View>
    )
  }

  _renderPokedex(datas) {
    let loader = null;
    if (this.props.isLoading) {
      loader = <View style={styles.loader} >
          <LoaderPokedexItems />
        </View>
    }

    return (
      <View style={{flex: 1}}>
        <ListView
            contentContainerStyle={styles.collection}
            style={styles.collectionView} 
            dataSource={this.ds.cloneWithRows(datas)}
            initialListSize={this.lastIndexDex}
            keyboardDismissMode='on-drag'
            pageSize={3}
            removeClippedSubviews={true} 
            // renderRow={this._renderRowDebug}
            renderRow={this._renderRow.bind(this)}
            showsVerticalScrollIndicator={true}
            automaticallyAdjustContentInsets={false}
            onEndReached={this.onEndReached.bind(this)}
            scrollRenderAheadDistance={0}
            enableEmptySections={true}
          />
        { loader }
      </View>
    )
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
    justifyContent: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 1,
    alignItems: 'flex-start',
    alignSelf: 'stretch'
  },
  collectionView: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  collectionItem: {
    margin: 3,
    width: (width / 3.20),
    height: (width / 3.20),
    justifyContent: 'center',
    borderWidth: 0.5,

  },
  text: {
    textAlign: 'center'
  },
  notFound: {
    alignItems: 'center',
    alignSelf: 'stretch',
    padding: 15
  },
  fetchLoader: { 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 8,
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 10
  },
  loader: {
    position: 'absolute',
    bottom: 10,
    marginTop: 15,
    left: 0,
    right: 0
  }
});


