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

var {height, width} = Dimensions.get('window');


import { fetchPkmn } from '../actions'

export default class Pokedex extends Component { 
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  }

  componentWillMount() {
    for (var i = 1; i < 60; i++) {
      this.props.dispatch(fetchPkmn(i));
    }
  }

  _renderRow (rowData, sectionID, rowID) {
    const datas = rowData.datas;
    console.log(datas.sprites.front_default)
    return (
       <TouchableHighlight underlayColor={'#ccc'}>
        <View>
          <View style={styles.collectionItem}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 100, height: 100}}
                source={{uri: datas.sprites.front_default }}
              />
            </View>
            <Text style={styles.text}>{datas.name} | #{datas.id}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    if (this.props.pkmns.length) {
      return (
        <ListView
          contentContainerStyle={styles.collection}
          dataSource={this.ds.cloneWithRows(this.props.pkmns)}
          renderRow={this._renderRow}
        />
      )
    } else {
      return (
        <Text>Hello empty</Text>
      )
    }
  }
}

const styles = StyleSheet.create({
  collection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: height
  },
  collectionItem: {
    backgroundColor: '#F9F9F9',
    margin: 3,
    width: (width / 3.20),
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center'
  }
});


