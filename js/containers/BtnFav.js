import React from 'react'
import { connect } from 'react-redux'

import BtnFav from './../components/PkmnDetailsComponents/BtnFav'
import { toggleFavoritePkmn } from '../actions'
import { getFavoritesPkmn } from '../selectors/'





function mapStateToProps(state, ownProps) {
  return {
    isAmongFavorite: (state.favoritesPkmnIndex.indexOf(state.pkmn.datas.id) > -1),
    favoritesPkmn: getFavoritesPkmn(state),
  }
}

const mapDispatchToProps = {
  toggleFavoritePkmn
}

const BtnFavContainer = connect(mapStateToProps, mapDispatchToProps)(BtnFav)

export default BtnFavContainer;
