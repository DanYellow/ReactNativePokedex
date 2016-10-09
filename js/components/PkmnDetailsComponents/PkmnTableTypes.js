import React, { Component, PropTypes } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
}
from 'react-native';

import _ from 'lodash' 

import uuid from 'react-native-uuid'

import { Utils } from '../../utils'

export default class PkmnTableTypes extends Component { 
  constructor(props, context) { 
    super(props, context); 
  }

  render() {
    return (
      <View style={styles.mainContainer}>
      {this._renderTableEffectiveness(this.props.weaknessAndImmune)}
        <Text>
        Legend : {'\n'}
          - 2x / 4x : Super effective {'\n'}
          - 1x : Effective {'\n'}
          - .5x / .25x : Not very effective {'\n'}
          - 0x : Not effective {'\n'}
        </Text>
      </View>
    ) 
  }

  _renderTableEffectiveness (datas) {
    var template = [];
    var titles = {
      "4x" : "Strongly weak to",
      "2x" : "Weak to",
      "1x" : "Damaged normally by",
      "0.5x" : "Resistant to",
      "0.25x" : "Strongly resistant to",
      "0x" : "Immune to",
    }

    for (var coefficient in _.groupBy(datas, 'effetiveness')) {
      template.push(
        <View style={styles.container} key={uuid.v1()}>
          <Text style={styles.title}>{titles[coefficient]} : </Text>
          <View style={styles.typesContainer} key={uuid.v1()}>
            {_.groupBy(datas, 'effetiveness')[coefficient].map((type, index) =>
              <View style={typeNameStyle(type.type.toLowerCase())} key={uuid.v1()}>
                <Text style={styles.typeName}>
                  {type.type} | {type.effetiveness}
                </Text>
              </View>
            )}
          </View>
        </View>
      )
    }
    return template;
  }
}

var typeNameStyle = function(type) {
  return {
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: Utils.typeColor(type),
    borderRadius: 5,
    marginRight: 5,
    marginBottom: 5
  }
}

const styles = StyleSheet.create({
  typeName: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
  container: {
    marginTop: 15,
    flexDirection: 'column',
  },
  typesContainer: { 
    alignItems: 'flex-start', 
    flexDirection:'row',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 18
  },
  mainContainer: {
    paddingLeft: 9,
    paddingRight: 9
  }
});
