import React, { Component } from 'react'

export default class Pooja2 extends Component {
  render() {
    let {imgurl}=this.props;
    
    return (<>
      <img src={imgurl} style={{width:"300px"}}></img>
      </>)

  }
}
