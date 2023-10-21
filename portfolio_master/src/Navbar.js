import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Navbar.css';
import Title from './Title';



const Navbar = () => {
  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/title">Shubham Salvi</a>
 
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="/about-us">About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Skill</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Resume</a>
                </li>
            </ul>
        </div>
    </nav>
    </div>
    
  )
}

export default Navbar
