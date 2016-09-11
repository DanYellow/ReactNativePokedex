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
    for (var i = 1; i < 30; i++) {
      this.props.dispatch(fetchPkmn(i));
    }
  }

  _onPressButton(rowID, rowData) {
    console.log(rowID, rowData)
  }

  _renderRow (rowData, sectionID, rowID) {
    const datas = rowData.datas;

    return (
       <TouchableHighlight 
        underlayColor={'#f00'} 
        style={styles.collectionItem} 
        accessibilityLabel={datas.name}
        onPress={this._onPressButton.bind(rowID, rowData)}>
        <View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 75, height: 75}}
                source={{uri: datas.sprites.front_default }}
              />
            </View>
            <Text style={styles.text}>{datas.name} | #{datas.id}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  _renderRowT (rowData, sectionID, rowID) {
    return (
      <Text>{rowData}</Text>
    )
  }

  _contentSizeChanged (contentWidth, contentHeight) {
    console.log(contentWidth, contentHeight)
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
        <Text>Hello empty</Text>
      )
    }
  }
}

const styles = StyleSheet.create({
  collection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // height: 500
  },
  collectionItem: {
    // backgroundColor: '#F9F9F9',
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


