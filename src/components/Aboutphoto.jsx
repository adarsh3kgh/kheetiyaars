import React from 'react'

function Aboutphoto() {
  return (
   <>
   <br />
   <br />
   <br />
  <div className='float-start' style={{ width: '500px', height: '500px', margin:'100px' }}>
   <h3 style={{fontWeight:'bold'}}>About us </h3>
   <br />
    <p> Kheetiyaars is swiftly establishing itself as a frontrunner in India's dynamic Agri-Tech sector. With deep insights into the challenges faced by farmers, Kheetiyaars offers a comprehensive range of solutions tailored to meet the diverse needs of the agricultural community.Utilizing cutting-edge AI technologies, Kheetiyaars optimizes various aspects of the agricultural value chain, from precision farming to market access, empowering farmers to make informed decisions and enhance productivity while minimizing environmental impact.</p>
   
   <p>Emphasizing collaboration and partnership, Kheetiyaars works closely with farmers, experts, and stakeholders to co-create solutions that drive tangible results. Through ongoing research and development efforts, Khetiyaars continually pushes the boundaries of Agri-Tech innovation.</p>
  
   <p>With a vision for a more sustainable and equitable agricultural future, Khetiyaars is poised to shape the trajectory of India's agriculture sector for years to come.</p>
  </div>
<img src="src/assets/photos/farmerflying.png" className="rounded float-end " style={{ width: '500px', height: '500px', margin:'100px',borderRadius:'50px;' }} alt="..."/>
 
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Integrity:
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
          <p> Maintaining the honor and honesty of our organization.</p>
          <p>Taking responsibility for our decisions and actions.</p>
          <p>Advocating for diversity and fostering a fair and inclusive workplace environment.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Ingenuity and Originality:
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       <p>Collaborating without rigid hierarchies.</p>
       <p>Demonstrating a fervent commitment to problem-solving.</p>
       <p>Challenging conventional norms and continuously striving for self-improvement.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Farmer-Centric Approach:
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Prioritizing the needs of farmers above all else.</p>
        <p>Innovating new methods to empower farmers.</p>
        <p>Going the extra mile to address and resolve farmer-related challenges.</p>
      </div>
    </div>
  </div>
</div>
  

   
   </>



  )
}

export default Aboutphoto
