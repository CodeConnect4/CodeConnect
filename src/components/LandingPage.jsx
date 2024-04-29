import React from 'react';
import gif from '../icons/first.png';
import logo from '../icons/logo.gif';

export default function Landing(){
  return(
  <div>     
  <header>
        <div className='header'>
        <img className='logo'src={logo} alt='logo' onClick={()=>{document.location.href='/'}}></img>
        <button className="menubuts" onClick={()=>{document.location.href='login'}}>Login</button>
        <button className="menubuts" onClick={()=>{document.location.href='signup'}}>SignUp</button>   
        <button className="menubuts">About Us</button>    
        </div>
      <div className="navgrad"></div>
   </header>
   <div className='main'>
      <div>
        <div className='mainhead'>
          <br></br>
          <div className="title">Code Connect </div>
          <div className='desc'>Unlocking the Power of Collaboration</div>
      </div>
      <div className='side'><img src={gif} alt='sideimg'></img> </div>     
    </div>
  <div className='get-started'>
  <a href='home' id='start' style={{textDecoration:'none'}}><p className='magic'>Get Started</p></a>
  </div>
  </div>  
  </div>
    )
}
