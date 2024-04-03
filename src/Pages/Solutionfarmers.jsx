import React from 'react'
import { Link } from 'react-router-dom';
import SolutionNavbar from '../components/SolutionNavbar';

function Solutionfarmers() {
  return (
   <>
  <SolutionNavbar></SolutionNavbar>
       <br />
   <br />
   <br />
  <div className='float-start' style={{ width: '500px', height: '500px', margin:'100px' }}>
  
   <h1 style={{fontWeight:'bold'}}>Solution for farmers </h1>
   <br />
    <p>Khetiyaars is swiftly establishing itself as a frontrunner in India's dynamic Agri-Tech sector. With deep insights into the challenges faced by farmers, Khetiyaars offers a comprehensive range of solutions tailored to meet the diverse needs of the agricultural community.Utilizing cutting-edge AI technologies, Khetiyaars optimizes various aspects of the agricultural value chain, from precision farming to market access, empowering farmers to make informed decisions and enhance productivity while minimizing environmental impact.</p>
   
   <p>Emphasizing collaboration and partnership, Khetiyaars works closely with farmers, experts, and stakeholders to co-create solutions that drive tangible results. Through ongoing research and development efforts, Khetiyaars continually pushes the boundaries of Agri-Tech innovation.</p>
  
   <p>With a vision for a more sustainable and equitable agricultural future, Khetiyaars is poised to shape the trajectory of India's agriculture sector for years to come.</p>
  </div>
<img src="src/assets/photos/solutionfarmers.png" className="rounded float-end " style={{ width: '500px', height: '500px', margin:'100px',borderRadius:'50px;' }} alt="..."/>




   </>
  )
}

export default Solutionfarmers
