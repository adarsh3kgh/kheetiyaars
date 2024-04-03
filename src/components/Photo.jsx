import React from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Photo() {
  return (
  <>
  <div className="container-fluid">
        <div className="row">
            <div className="col-12 scrollable-image width-100vh">
            <img className="display:100vh w-64 h-48 overflow-hidden" src="src/assets/photos/dji-5331597 edited.png" class="img-fluid" alt="..."></img>
            </div>
        </div>
    </div>
  
  </>
  )
}

export default Photo
