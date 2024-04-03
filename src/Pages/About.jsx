import React from 'react'
import AboutNavbar from '../components/AboutNavbar'
import Aboutphoto from '../components/Aboutphoto'
import { Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from "react-bootstrap/Button";


function About() {
  return (
    <>
    <AboutNavbar></AboutNavbar>
    <Aboutphoto></Aboutphoto>
    
    </>
  )
}

export default About
