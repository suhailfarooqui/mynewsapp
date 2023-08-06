import './App.css';


import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Exp from './components/Exp';
import Exp2 from './components/Exp2';
import Exp3 from './components/Exp3';
import Pooja from './components/Pooja'; 
import Rashi from './components/Rashi';
import Amber from './components/Amber';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import { useState } from 'react';
export default class App extends Component {
  
  
  
  render(){ 
    
    
    return (<>

    <Router>
  <Navbar/>
    
    <Routes>
      <Route exact path='/' element={<News key='home' pageSize={8}  country="in" category=''/>}>home</Route>
      <Route exact path='/business' element={<News key='business' pageSize={8}  country="in" category='business'/>}>business</Route>
      <Route exact path='/entertainment' element={<News key='entertainment' pageSize={8}  country="in" category='entertainment'/>}>entertainment</Route>
      <Route exact path='/general' element={<News key='general' pageSize={8}  country="in" category='general'/>}>general</Route>
      <Route exact path='/health' element={<News key='health' pageSize={8}  country="in" category='health'/>}>health</Route>
      <Route exact path='/science' element={<News key='science' pageSize={8}  country="in" category='science'/>}>science</Route>
      <Route exact path='/sports' element={<News key='sports' pageSize={8}  country="in" category='sports'/>}>sports</Route>
      <Route exact path='/technology' element={<News key='technology' pageSize={8}  country="in" category='technology'/>}>technology</Route>
      
    </Routes>
  </Router>


{/* <Exp/> */}
      {/* <Navbar/> */}
      
      {/* <Exp2/> */}
      {/* <Exp3 name={"suhail"}/> */}
      {/* <Pooja/> */}
      {/* <Rashi/> */}
      {/* <Amber/> */}
      
      </>)
  }
}



