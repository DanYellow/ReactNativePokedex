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

import { filterPkmns } from '../actions'

export default class SearchBar extends Component { 
  constructor(props, context) { 
    super(props, context); 
  }

  inputValueChanged (event) {
    this.props.dispatch(filterPkmns(event.nativeEvent.text));
  }

  render() {
    return ( 
      <View style={Styles.inputContainer}>
        <Text>{this.props.pkmns.length} finded!</Text>
        <TextInput style={Styles.input} onChange={this.inputValueChanged.bind(this)} placeholder="Enter a Pokemon name"></TextInput>

        <SegmentedControlIOS 
          values={['All', 'My favourites']}
          
          selectedIndex={0} 
          onChange={(event) => { this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex}); }} />
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
    borderColor: 'black',
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
    paddingLeft: 15, 
    paddingRight: 15, 
    paddingBottom: 5, 
    borderBottomWidth: 1, 
    borderBottomColor: 'black'
  }
});
