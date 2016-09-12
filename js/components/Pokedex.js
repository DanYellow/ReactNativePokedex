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

import * as Helpers from '../utils'

import PokedexItem from './PokedexItem'
import PokemonDetails from './PokemonDetails'

var {height, width} = Dimensions.get('window');


import { fetchPkmn } from '../actions'

export default class Pokedex extends Component { 
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.lastIndexDex = 14;
    this.maxIndexDex = 721;
    // Debug mode | Work with only one datas
    this.activateInfiniteScroll = false;
  }

  setNativeProps(nativeProps) { 
    this._root.setNativeProps(nativeProps); 
  }

  componentWillMount() {
    for (var i = 1; i < this.lastIndexDex; i++) {
      this.props.dispatch(fetchPkmn(i));
    }
  }

  _onPressPkmn(rowID, rowData) {
    const pkmnDatas = rowData.datas;

    if (pkmnDatas.hasOwnProperty('detail')) {
      Alert.alert( 'Error', 'Too many requests', [ {text: 'OK', onPress: () => console.log('OK Pressed!')}, ] )
      return;
    }

    this.props.navigator.push({
      title: pkmnDatas.name.capitalizeFirstLetter(),
      component: PokemonDetails,
      rightButtonIcon: require('image!no-favorite'),
      passProps: {
        pkmn: pkmnDatas,
        navigator: this.props.navigator
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
        onPress={this._onPressPkmn.bind(this, rowID, rowData)}>
          <PokedexItem datas={datas}/>
          
      </TouchableHighlight>
    )
  }

  onEndReached (arg) {
    if (this.lastIndexDex >= this.maxIndexDex) {
      return;
    }
    // dispatch(allPkmnFinishRendering(false))
    for (var i = this.lastIndexDex + 1; i < this.lastIndexDex + 5; i++) {
      this.props.dispatch(fetchPkmn(i));
    }
    this.lastIndexDex += 5;
    
  }

  _renderRowT (rowData, sectionID, rowID) {
    return (
      <Text>{rowData}</Text>
    )
  }

  renderFooter () {
      return this.props.isFinishLoaded ? <ActivityIndicator 
            animating={true}
            style={[styles.fetchLoader, {height: 80}]} size="large" /> : null
    }

  render() {
    if (this.props.pkmns.length) {
      return (
        <ListView
            contentContainerStyle={styles.collection}
            style={styles.listView} 
            dataSource={this.ds.cloneWithRows(this.props.pkmns)}
            initialListSize={this.lastIndexDex}
            keyboardDismissMode='on-drag'
            // renderRow={this._renderRowT}
            renderRow={this._renderRow.bind(this)}
            showsVerticalScrollIndicator={true}
            automaticallyAdjustContentInsets={false}
            onEndReached={this.onEndReached.bind(this)}
            // renderHeader={this.renderFooter.bind(this)}
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
    backgroundColor: '#fff'
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    marginTop: 15,
  },
  fetchLoader: { 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 8,
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 10
  }
});


