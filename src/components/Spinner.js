import React, { Component } from 'react'
import Giphy from './Giphy.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Giphy} alt="Giphy"/>
      </div>
    )
  }
}
