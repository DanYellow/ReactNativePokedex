import React, { Component, PropTypes } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

class LoaderPokedexItems extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'LoaderPokedexItems';
    }
    render() {
      return (
        <View style={styles.loader}>
          <Image source={require('../img/pokedex-loader.gif')} />
          <Text>Loading...</Text>
        </View>
      )
    }
}



const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: 'center',
  },
});

export default LoaderPokedexItems;
