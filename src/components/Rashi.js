import React, { Component } from 'react'
import Rashi2 from './Rashi2';

export default class Rashi extends Component {
    
    constructor(){
        super();
        
        this.state={
            aaa:[
                {url:"https://www.indiaherald.com/Assets/ArticleUpload/2022126202125250_WhatsApp-Image-2022-12-06-at-8-14-28-PM-(1).jpeg"},
                {url:"https://www.kerala9.com/wp-content/uploads/2021/11/rashi-khanna-latest-photoshoot-for-aza-magazine-005.jpg"},
                {url:"https://telugu.cdn.zeenews.com/telugu/sites/default/files/RashiKhannaCleavageSaw.jpg"},
                {url:"http://www.cinespot.net/gallery/d/3412444-1/Rashi+Khanna+New+Photoshoot+Images+_5_.jpg"},
                
                {url:"https://www.behindwoods.com/tamil-actress/raashi-khanna/raashi-khanna-stills-photos-pictures-771.jpg"},
                {url:"http://www.andhrawishesh.com/images/phocagallery/Actress/Telugu/RashiKhannaNewPhotoshoot/Rashi-Khanna-New-Photoshoot-07.JPG"},
                
                {url:"https://1.bp.blogspot.com/-TBcHVtCuKJw/X3mWXVy37cI/AAAAAAANs18/kxtQqUMKbaU_Ni_ZnIRcj3CM9zpSClwowCLcBGAsYHQ/s320/Rashi%2BKhanna%2B-%2B%25282%2529.jpeg"},
                {url:"https://1.bp.blogspot.com/-dunYwNMVyj8/X3mWX7jMMAI/AAAAAAANs2A/ob8jt38Jy0orsezlyW9X6elodfVJKY6JwCLcBGAsYHQ/s320/Rashi%2BKhanna%2B-%2B%25283%2529.jpeg"},
                {url:"https://1.bp.blogspot.com/-rsopv1OrQgE/X3mWYcTNEKI/AAAAAAANs2I/Ua7xBn_jXsEIqbo_t_NLuilQFFP1Q3gGACLcBGAsYHQ/s320/Rashi%2BKhanna%2B-%2B%25284%2529.jpeg"},
                {url:"http://www.andhrawishesh.com/images/phocagallery/Actress/Telugu/RashiKhannaPhotoShoot/Rashi-Khanna-PhotoShoot-03.jpg"},
        ]
        }
    }
  render() {

    return (<>
      <div className="container">
        <div className="row">{this.state.aaa.map((element)=>{
            return(
                <div className="col-md-4"key={element.url}><Rashi2 imgurl={element.url}/></div>
            )
        })}</div>
      </div>
      </>)
  }
}
