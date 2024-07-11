import React from 'react';
import logo from '../../assets/img/rent.png';
import me from '../../assets/img/me.jpg';
import './Navbar.css';

function Navbar (){
    return(
        <>
<nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
  <a className="navbar-brand" href="/"><img src={logo} alt='' className='logo'/></a>
    <ul className="navbar-nav ">
      <li className="nav-item active">
        <a className="nav-link" href="/">HOME <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">ELECTRIC CARS</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">SPORTS CARS</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">SUV</a>
      </li>
      
        <div className='classme'>
           <img src={me} alt='' className='me'/>
           <h5>MY ACCOUNT</h5>
        </div>
      
    </ul>
  </div>
</nav>

        </>
    )
}

export default Navbar;