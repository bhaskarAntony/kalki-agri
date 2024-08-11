import React from 'react'
import './style.css'
import logo from '../../assets/images/logo.jpeg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className=' bg-green3  p-3 p-md-5 pt-5'>
        <div className="footer-top container-fluid bg-green-3">
            <img src={logo} alt="kalki agri" className='logo' data-aos="zoom-in"/>
            <div className="footer-icons">
               <Link to=""  target='_blank' data-aos="zoom-in"><i className='bi bi-facebook'></i></Link>
              <Link to=""  target='_blank' data-aos="zoom-in"><i className='bi bi-instagram'></i></Link>
              <Link to=""  target='_blank' data-aos="zoom-in"><i className='bi bi-whatsapp'></i></Link>
             <Link to=""  target='_blank' data-aos="zoom-in"><i className='bi bi-telegram'></i></Link>
            </div>
           

        </div>
        <div className="devider"></div>
        <div className="row mt-4">
                <div className="col-md-4 mt-4">
                    <h1 className="fs-4 fw-bold text-light">Navigation</h1>
                    <ul typeof='none' className='p-0'>
                        <li><Link to="/">About us</Link></li>
                        <li><Link to="/">Mission & Vision</Link></li>
                        <li><Link to="/">Contact us</Link></li>
                        <li><Link to="/">Benifits</Link></li>
                        <li><Link to="/">Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className="col-md-4 mt-4">
                    <h1 className="fs-4 fw-bold text-light">Our Services</h1>
                    <ul typeof='none' className='p-0'>
                    <li><Link  to="#">Market Research and Analysis</Link></li>
                    <li><Link  to="#">Branding and Advertising</Link></li>
                    <li><Link  to="#">Digital Marketing and Social Media</Link></li>
                    <li><Link to="#">Trade Show and Event Promotion</Link></li>
                    </ul>
                </div>
                <div className="col-md-4 mt-4">
                    <h1 className="fs-4 fw-bold text-light">KALKI <span className="text-orange">AGRI</span></h1>
                    <ul typeof='none' className='p-0'>
                    <li>
                        <h6 className="fs-5">Email</h6>
                        <Link  to="#">Kalki.agri@gmail.com</Link>
                        </li>
                        <li>
                        <h6 className="fs-5">Phone number</h6>
                        <Link  to="#">+91 9606729320</Link>
                        </li>
                        <li>
                        <h6 className="fs-5">Address</h6>
                        <span className="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ab obcaecati autem ex quaerat excepturi!</span>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="text-center text-light mb-0">&copy; Copyright {new Date().getFullYear()}</p>
    </footer>
)
}

export default Footer