import React from 'react'
import Productlist from '../components/Productlist'
import { Link } from 'react-router-dom';
import Productlist22 from '../components/Productlist22';

function Product() {
  return (
    <>
   
   <nav className="navbar fixed-top bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="src/assets/photos/logo.png" alt="Logo" width="150rem" height="90rem" className="d-inline-block align-text-top"/>
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
               
            </li>
          </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">About</Link>
              </li>

            </ul>
           
            <div class="dropdown">
  <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"> Solution </button>
  <ul class="dropdown-menu">
  <li><Link className="dropdown-item" aria-current="page" to="/solutionforfarmers">Solution for farmers</Link> 
    </li>
    <li>
      <Link className="dropdown-item" aria-current="page" to="/solutionformicro">Solution for micro enterpuners</Link>
    </li>
    <li>
    <Link className="dropdown-item" aria-current="page" to="/hydrophonic">Hydroponics</Link>
    </li>
    
  </ul>
  
</div>
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="active" aria-current="page" to="/product" ><h5>Product</h5></Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/order">Order</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/contactus">Contact us</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
          <li className="nav-item">
              
              <Link className="nav-link active" aria-current="page" to="/login"><button type="button" className="btn btn-success"><h5>Login</h5></button></Link>
            </li>
          </ul>
        </div>
      </nav> 
       <br />
       <br />
       <br />
      <Productlist22></Productlist22>
     
    </>
  )
}

export default Product
