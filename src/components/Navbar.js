import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

   return (      
      <nav class="navbar navbar-expand-lg">
      <div class="container">
        <h1 class="navbar-brand">CryptoDashboard</h1>
        <button className="navbar-toggler bg-secondary" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/news">News</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/exchanges">Exchanges</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav> 
   )
}

export default Navbar;