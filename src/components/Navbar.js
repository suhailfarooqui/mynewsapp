import React, { Component } from "react";
import { useState } from "react";
import {
  BrowserRouter,
  Link,
  Route,Routes
  
} from 'react-router-dom'

export class Navbar extends Component {
  
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item"><Link className="nav-link" to="/business">business</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/entertainment">entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/general">general</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/health">health</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/science">science</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/sports">sports</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/technology">technology</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/technology" onClick={this.india}>india</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/technology"onClick={this.usa}>usa</Link></li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            
          </ul>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
      </>
    );
  }
}

export default Navbar;
