import React from 'react';
import {Link} from 'react-router-dom'

const Navbarz = () => {
  return (
   <div>

      <div className='container'>
         <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid ">
    <a class="navbar-brand" href="#">React Crud</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="#">Home
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/About">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/ContactUs">ContactUs</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

     
    </div>
    </div>
  )
}

export default Navbarz;