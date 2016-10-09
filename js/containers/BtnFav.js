import React from 'react'
import { connect } from 'react-redux'

import BtnFav from './../components/PkmnDetailsComponents/BtnFav'
import { toggleFavoritePkmn } from '../actions'


const mapDispatchToProps = {
  toggleFavoritePkmn
}


const BtnFavContainer = connect(null, mapDispatchToProps)(BtnFav)

export default BtnFavContainer
