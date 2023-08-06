import React, { Component } from 'react'

export default class Exp2 extends Component {

    constructor(){
        super();
        this.state={
            number:1,
            width:"200px"

        }
    }
    next=()=>{
        this.setState({
            number:this.state.number+1,
            msg:"",
            
        })
    }
    previous=()=>{
        if(this.state.number>1){
        this.setState({
            number:this.state.number-1
        })}else{
            this.setState({
                msg:alert("You cannot reduce the number below one")
            })

        }
    }
    hover=()=>{
        this.setState({
            width:"600px"
        })
    }
    nohover=()=>{
        this.setState({
            width:"200px"
        })
    }
  render() {
    return (<>
      <div className="contaner">{this.state.number}{this.state.msg}</div>
      <button className='btn btn-dark' onClick={this.previous}>previous</button>
      <button className='btn btn-dark' onClick={this.next}>next</button>
      <div className="container" >
        <div className="row">
            <div className="col" ><img src='https://www.filmibeat.com/ph-big/2023/02/pooja-hegde_167531361210.jpg' style={{width:this.state.width}} onMouseEnter={this.hover} onMouseLeave={this.nohover}></img></div>
        </div>
      </div>
      </>)
  }
}
