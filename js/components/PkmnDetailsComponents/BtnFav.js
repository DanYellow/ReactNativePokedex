import React, { Component, PropTypes } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableHighlight,
}
from 'react-native';

import { Utils } from '../../utils'

export default class BtnFav extends Component { 
  constructor(props, context) { 
    super(props, context);

    this.state = {
      isAmongFavorite: this.props.isAmongFavorite
    }
  }

  _onPressButton () {
    this.props.toggleFavoritePkmn(this.props.pkmnID);
    this.setState({isAmongFavorite: !this.state.isAmongFavorite});
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    return (
      <TouchableHighlight onPress={() => this._onPressButton()}>
        <View style={ Styles.btnFavContainer }>
          <Text style={ Styles.btnFav }>
            { this.state.isAmongFavorite && 'Retirer des favoris'}
            { !this.state.isAmongFavorite && 'Ajouter aux favoris'}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const Styles = StyleSheet.create({
  btnFavContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'red',
  },
  btnFav: {
    textAlign: 'center',
    fontSize: 16
  }
});
