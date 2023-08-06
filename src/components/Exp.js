import React, { Component } from 'react'

export default class Exp extends Component {
    constructor(){
        super();
        console.log('constructor')
        this.state={
            number:1
        }
    }
    componentDidMount(){
        console.log("component did mount")
    }
  render() {
      console.log("render")
    return (<>
    <div className='app'>component did update</div>
    <h1><button onClick={()=>{this.setState({number:this.state.number})}}>click to update</button></h1>
    <h2>{this.state.number}</h2>
      </>)
  }
}
