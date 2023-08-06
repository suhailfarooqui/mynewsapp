import React, { Component } from 'react'

export default class Rashi2 extends Component {
  render() {
    let{imgurl}=this.props;
    return (<>
      <img src={this.props.imgurl} style={{width:"370px"}}/>
      </>)
  }
}
