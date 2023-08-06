import React, { Component } from 'react'

export class Exp extends Component {
    constructor(){
        super();
        this.state={
            number:1
        }

        
    }
    addNumber=()=>{
        this.setState({
            number:this.state.number+1
        })
    }
    reduceNumber=()=>{
        this.setState({
            number:this.state.number-1
        })
    }
  render() {
    return (<>
    <div className="container">{this.state.number}</div>
      <div className="container">
        <button disabled={this.state.number==10} className='btn btn-dark my-2 mx-5' onClick={this.addNumber}>click to add</button>
        <button disabled={this.state.number==1} className='btn btn-dark my-2 mx-5' onClick={this.reduceNumber}>click to reduce</button>
      </div>
      </>)
  }
}

export default Exp