import React, { Component } from 'react'
import Amber2 from './Amber2';

export default class Amber extends Component {
    constructor(){
        super();
        this.state={
            aaa:[
                {
                    url:"https://flxt.tmsimg.com/assets/375633_v9_bb.jpg"
                },
                {
                    url:"https://media.vanityfair.com/photos/62559bc1c5772c40d1b6f873/2:3/w_887,h_1331,c_limit/johnny-depp-amber-heard-trial-04122022.jpg"
                },
                {
                    url:"https://akns-images.eonline.com/eol_images/Entire_Site/202161/rs_634x1024-210701150953-634-amber-heard-daughter-1.jpg?fit=around%7C634:1024&output-quality=90&crop=634:1024;center,top"
                },
                {
                    url:"https://flxt.tmsimg.com/assets/375633_v9_bb.jpg"
                },
                {
                    url:"https://media.vanityfair.com/photos/62559bc1c5772c40d1b6f873/2:3/w_887,h_1331,c_limit/johnny-depp-amber-heard-trial-04122022.jpg"
                },
                {
                    url:"https://akns-images.eonline.com/eol_images/Entire_Site/202161/rs_634x1024-210701150953-634-amber-heard-daughter-1.jpg?fit=around%7C634:1024&output-quality=90&crop=634:1024;center,top"
                },
                {
                    url:"https://flxt.tmsimg.com/assets/375633_v9_bb.jpg"
                },
                {
                    url:"https://media.vanityfair.com/photos/62559bc1c5772c40d1b6f873/2:3/w_887,h_1331,c_limit/johnny-depp-amber-heard-trial-04122022.jpg"
                },
                {
                    url:"https://akns-images.eonline.com/eol_images/Entire_Site/202161/rs_634x1024-210701150953-634-amber-heard-daughter-1.jpg?fit=around%7C634:1024&output-quality=90&crop=634:1024;center,top"
                },
                {
                    url:"https://flxt.tmsimg.com/assets/375633_v9_bb.jpg"
                },
                {
                    url:"https://media.vanityfair.com/photos/62559bc1c5772c40d1b6f873/2:3/w_887,h_1331,c_limit/johnny-depp-amber-heard-trial-04122022.jpg"
                },
                {
                    url:"https://akns-images.eonline.com/eol_images/Entire_Site/202161/rs_634x1024-210701150953-634-amber-heard-daughter-1.jpg?fit=around%7C634:1024&output-quality=90&crop=634:1024;center,top"
                },
            ]
        }
    }
  render() {
    return (<>
      <div className="container">
        <div className="row">{this.state.aaa.map((element)=>{
            return(
                <div className="col-md-4" key={element.url}><Amber2 imgurl={element.url}/></div>
            )
        })}</div>
      </div>
      </>)
  }
}
