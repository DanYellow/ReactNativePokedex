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
import PokemonDetails from './PokemonDetails'

var {height, width} = Dimensions.get('window');


import { fetchPkmn } from '../actions'

export default class Pokedex extends Component { 
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id });

    this.lastIndexDex = 4;
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
    const pkmnDatas = rowData.datas;

    if (pkmnDatas.hasOwnProperty('detail')) {
      Alert.alert( 'Error', 'Too many requests', [ {text: 'OK', onPress: () => console.log('OK Pressed!')}, ] )
      return;
    }

    var icon = (this.props.favoritesPkmnIndex.indexOf(pkmnDatas.id) > -1) ? require('image!favorite') : require('image!no-favorite');

    this.props.navigator.push({
      title: pkmnDatas.name.capitalizeFirstLetter(),
      component: PokemonDetails,
      rightButtonIcon: icon,
      passProps: {
        pkmn: pkmnDatas,
        navigator: this.props.navigator
      },
      onRightButtonPress: () => {
        this.props.toggleFavoritePkmn(pkmnDatas.id)
        
        // try {
        //   await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
        // } catch (error) {
        //   // Error saving data
        // }
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
        onPress={this._onPressPkmn.bind(this, rowID, rowData)}
        >
          <PokedexItem datas={datas}/>
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

  renderFooter () {
      return this.props.isFinishLoaded ? <ActivityIndicator 
            animating={true}
            style={[styles.fetchLoader, {height: 80}]} size="large" /> : null
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
      // return this._renderLoading()
      return null;
    } else if (filteredPkmns.length > 0 && !this.props.isLoading) {
      return this._renderPokedex(pkmnsSrc);
    } else if (filteredPkmns.length == 0 && searchTerm !== '') {
      return this._renderNoResultScreen();
    } else {
      return this._renderPokedex(pkmnsSrc);
    }
  }

  _renderNoResultScreen () {
    return (
      <View style={styles.loader}>
        <Image source={require('../img/pokdex-no-results.gif')} />
        <Text>No results</Text>
      </View>
    )
  }

  _renderLoading () {
    return (
      <View style={styles.loader}>
        <Image source={require('../img/pokedex-loader.gif')} />
        <Text>Loading...</Text>
      </View>
    )
  }

  _renderPokedex(datas) {
    return (
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
  collectionView: {
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


