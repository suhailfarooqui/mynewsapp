import PropTypes from 'prop-types'
import React, { Component } from 'react'


export class NewsItem extends Component {

  
  render() {


      let {title,discription,imageUrl,newsUrl,published,author,source}=this.props;
      // let d={newdate=this.props.published}
    return (<>
      <div className='my-3'>
        <div className="card" >
      <span class="badge text-bg-success" style={{zIndex:1}}>Success</span>
      <img src={this.props.imageUrl} style={{height:"150px"}}className="card-img-top" alt="..."/>
      <div className="card-body">
      
        <h5 className="card-title">{title} </h5>
        <p className="card-text">{this.props.discription}</p>
        <a rel='noreferrer' href={this.props.newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
        <p className="card-text">by {author} on {new Date(published).toGMTString()}</p>
      </div>
    </div>
    
    </div>
    
    </>)
  }
}

export default NewsItem