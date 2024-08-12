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
              <Link to="https://www.instagram.com/kalki.agri?igsh=MTRkaDdmYTRhNGZwNw=="  target='_blank' data-aos="zoom-in"><i className='bi bi-instagram'></i></Link>
              <Link to="https://whatsapp.com/channel/0029VakbaFG0lwgyvCjOiX2G"  target='_blank' data-aos="zoom-in"><i className='bi bi-whatsapp'></i></Link>
             <Link to=""  target='_blank' data-aos="zoom-in"><i className='bi bi-telegram'></i></Link>
            </div>
           

        </div>
        <div className="devider"></div>
        <div className="row mt-4">
                <div className="col-md-4 mt-4">
                    <h1 className="fs-4 fw-bold text-light">Navigation</h1>
                    <ul typeof='none' className='p-0'>
                        <li><Link to="/about-us">About us</Link></li>
                        <li><Link to="/vision">Mission & Vision</Link></li>
                        <li><Link to="/contact-us">Contact us</Link></li>
                        {/* <li><Link to="/">Benifits</Link></li>
                        <li><Link to="/">Privacy Policy</Link></li> */}
                    </ul>
                </div>
                <div className="col-md-4 mt-4">
                    <h1 className="fs-4 fw-bold text-light">Our Services</h1>
                    <ul typeof='none' className='p-0'>
                    <li><Link  to="/market-research-agriculture">Market Research and Analysis</Link></li>
                    <li><Link  to="/branding-and-advertising-services">Branding and Advertising</Link></li>
                    <li><Link  to="/digital-marketing-and-social-media-services">Digital Marketing and Social Media</Link></li>
                    <li><Link to="/trade-show-and-event-promotion-services">Trade Show and Event Promotion</Link></li>
                    </ul>
                </div>
                <div className="col-md-4 mt-4">
                    <h1 className="fs-4 fw-bold text-light">KALKI <span className="text-orange">AGRI</span></h1>
                    <ul typeof='none' className='p-0'>
                    <li>
                        <h6 className="fs-5">Email</h6>
                        <Link  to="mainto:Kalki.agri@gmail.com">Kalki.agri@gmail.com</Link>
                        </li>
                        <li>
                        <h6 className="fs-5">Phone number</h6>
                        <Link  to="tel:+919740885332">+91 9740885332</Link> 
                        <br />
                        <Link  to="tel:+919036465175">+91 9036465175</Link>
                        </li>
                        <li>
                        <h6 className="fs-5">Address</h6>
                        <Link to="https://www.google.com/maps/place/Kodihalli+Village,+Karnataka+561203/@13.3106257,77.5866991,18z/data=!4m6!3m5!1s0x3bb1e0c11f61181b:0xa61ea157661c59f4!8m2!3d13.3102905!4d77.5880899!16s%2Fg%2F1w6r6qpj?entry=ttu">  <span className="fs-6">Kodihalli village, Kalalughatta post, Thymagodlu Hobli, Nelamangala taluk, Bangalore Rural -562132</span></Link>
                      
                        </li>
                    </ul>
                </div>
            </div>
            <p className="text-center text-light mb-0">&copy; Copyright {new Date().getFullYear()}</p>
    </footer>
)
}

export default Footer