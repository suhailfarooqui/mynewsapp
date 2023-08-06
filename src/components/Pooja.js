import React, { Component } from 'react'
import Pooja2 from './Pooja2'

export default class Pooja extends Component {
    constructor(){
        super();
        this.state={

            aaa:[
                {
                    url:"https://www.filmibeat.com/ph-big/2023/02/pooja-hegde_167531361220.jpg"
                },
                { 
                    url:"https://m.timesofindia.com/photo/94841001/94841001.jpg?v=3"
                },
                {
                    url:"https://1.bp.blogspot.com/-BSjt9CVfVyc/X9336FyuA1I/AAAAAAAAF1w/T3iEBU7PMvczJEvDJywfgd4l9gHgQ0RYwCLcBGAsYHQ/s1600/behance_download_1608379943180.jpg"
                },
                {
                    url:"https://filmitamasha.com/wp-content/uploads/2020/02/pooja-hegde-23.jpg"
                },
                {
                    url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Pooja-Hegde-6.jpg/1636px-Pooja-Hegde-6.jpg"
                },
                
            ]
        }
    }
  render() {
    return (<>
      <div className="container">
        <div className="row">
            {this.state.aaa.map((element)=>{
                return(
                    <div className="col-md-3" key={element.url}><Pooja2 imgurl={element.url}/></div>
                )
            })}
        </div>
      </div>
      </>)
  }
}
