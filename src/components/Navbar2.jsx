import React from 'react'
import Logo from './Logo'

function Navbar2() {
  return (
   <>
   <nav className="navbar fixed-top bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="src/assets/photos/logo.png" alt="Logo" width="150rem" height="90rem" className="d-inline-block align-text-top"/>
    </a>
    <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="#">Home</a>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Solution</a>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Product</a>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Order</a>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contact us </a>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><button type="button" className="btn btn-success"><h5>Login</h5></button> </a>
        </li>
      </ul>

  </div>
</nav>  
 
   </>
  )
}

export default Navbar2
