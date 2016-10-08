import React, { Component, PropTypes } from 'react';
import { 
  requireNativeComponent
} 
from 'react-native';

class Player extends React.Component { 
  render() { 
    return <Player {...this.props} />; 
  } 
}

Player.propTypes = {
  alpha: React.PropTypes.number,
  soundPath: React.PropTypes.string
};

module.exports = requireNativeComponent('Player', Player);
