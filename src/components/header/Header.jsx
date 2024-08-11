import React from 'react'
import './style.css'
import logo from '../../assets/images/logo.jpeg'

function Header() {
  return (
    <header>
        <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand text-light fs-3 d-flex align-items-center" href="/"> <img src={logo} alt="kalki agri" className='logo' /> <span className="fw-bold mt-2 d-block">KALKI <span className="text-orange">AGRI</span></span> </a>
    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className='bi bi-list fs-1 text-light'></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-lg-0 mt-1">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about-us">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">vision/goal</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Market Research and Analysis</a></li>
            <li><a class="dropdown-item" href="#">Branding and Advertising</a></li>
            <li><a class="dropdown-item" href="#">Digital Marketing and Social Media</a></li>
            <li><a class="dropdown-item" href="#">Trade Show and Event Promotion</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact-us">Contact us</a>
        </li>
        
      </ul>
      <form class="d-flex">
        <button class="btn-orange px-4 py-2" type="submit">Register</button>
      </form>
    </div>
  </div>
</nav>
    </header>
  )
}

export default Header