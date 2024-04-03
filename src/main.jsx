import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Product from './Pages/Product.jsx'
import Login from './Pages/Login.jsx'
import Solutionfarmers from './Pages/Solutionfarmers.jsx'
import Solutionmicro from './Pages/Solutionmicro.jsx'
import Contactus from './Pages/Contactus.jsx'
import Register from './Pages/Register.jsx'
import Hydroponics from './Pages/Hydroponics.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
  },
   {
    path: "home",
    element:<Home></Home>
  },
  {
    path: "about",
    element:<About></About>
  },
  {
    path: "solutionforfarmers",
    element:<Solutionfarmers></Solutionfarmers>
  },{
    path: "solutionformicro",
    element:<Solutionmicro></Solutionmicro>
  },
  ,
  // {
  //   path: "order",
  //   element:<Order></Order>
  // },
  {
    path: "product",
    element:<Product></Product>
  },
  {
    path: "contactus",
    element:<Contactus></Contactus>
  },
  
  {
    path: "login",
    element:<Login></Login>
  }
  ,
  {
    path: "register",
    element:<Register></Register>
  },
  {
    path: "hydrophonic",
    element:<Hydroponics></Hydroponics>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
