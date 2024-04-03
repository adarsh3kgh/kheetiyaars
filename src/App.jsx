import { useState } from 'react'


import './App.css'
import Photo from './components/Photo'
import Navbar2 from './components/Navbar2'
import Home from './Pages/Home'
import About from './Pages/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Solutionfarmers from './Pages/Solutionfarmers'
import Solutionmicro from './Pages/Solutionmicro'
import Product from './Pages/Product'
import Productlist from './components/Productlist'
import Contactus from './Pages/Contactus'
import Login from './Pages/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Home></Home>
    
    </>
  )
}

export default App
