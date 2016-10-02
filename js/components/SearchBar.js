import React, { Component, PropTypes } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Dimensions,
  TextInput,
  SegmentedControlIOS
}
from 'react-native';

import { searchPkmn } from '../actions'

export default class SearchBar extends Component { 
  constructor(props, context) { 
    super(props, context); 
  }

  inputValueChanged (event) {
    this.props.searchPkmn(event.nativeEvent.text);
  }

  segmentedControlChanged (event) {
    // this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex})
  
    this.props.filterFavoritesPkmn(event.nativeEvent.selectedSegmentIndex);
  }

  render() {
    return ( 
      <View style={Styles.container}>
        <Text style={{
          marginTop: 10
        }}>{ (this.props.filteredPkmns.length || this.props.searchTerm !== '') || this.props.pkmns.length } Pokemon founded!</Text>
        <TextInput 
          style={Styles.input} 
          onChange={this.inputValueChanged.bind(this)}
          clearButtonMode='while-editing'
          keyboardAppearance='dark'
          placeholder="Enter a Pokemon name"></TextInput>

        <SegmentedControlIOS 
          values={['All', 'My favourites']}
          tintColor='white'
          selectedIndex={0} 
          onChange={(event) => this.segmentedControlChanged(event) } />
      </View>
    ) 
  } 
}

var {height, width} = Dimensions.get('window');


const Styles = StyleSheet.create({
  input: {
    fontSize: 20,
    textAlign: 'left',
    color: 'black',
    height: 40, 
    borderColor: '#9f3f3f',
    borderWidth: 1,
    flex: 0.6,
    padding: 5,
    marginBottom: 10,
    backgroundColor: '#FFF'
  },
  container: {
    marginTop: 65,
    alignSelf: 'stretch',
    backgroundColor: '#eb5d5d',
    paddingLeft: 10, 
    paddingRight: 10, 
    paddingBottom: 10, 
    borderBottomWidth: 1, 
    borderBottomColor: '#9f3f3f'
  }
});
