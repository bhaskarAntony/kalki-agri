import React from 'react'
import contactImage from './constct.jpeg'
import './style.css'
import Feedback from '../../components/feedback/Feedback'

function Contact() {
  return (
    <section className='contact-page'>
        <div className="banner-top p-3">
            <h1 className="fs-1 fw-bold text-light">Contact us</h1>
        </div>
       <div className="container p-3">
       <div className="row">
            <div className="col-md-6">
                <img src={contactImage} alt="contact us" className="w-100 mb-3 rounded-4" />
            </div>
            <div className="col-md-6">
                <h1 className="fs-1 text-green fw-bold">Let’s Get Started</h1>
                <p className="fs-5 text-green">
                At Kalki Agri, we're dedicated to helping farmers like you grow 
                their businesses. Our expert team provides innovative marketing 
                solutions to connect you with the right customers, at the right 
                time. 
                </p>

                <ul className='p-0'>
                    <li className='d-flex gap-3 align-item-center mb-4'>
                    <i class="bi bi-envelope"></i>
                    <div>
                        <span className="fs-5 fw-bold text-green">Email</span><br />
                        <span className="fs-6">kalki.agri@gmail.com</span>
                    </div>
                    </li>
                    <li className='d-flex gap-3 align-item-center mb-4'>
                    <i class="bi bi-telephone"></i>
                    <div>
                        <span className="fs-5 fw-bold text-green">Phone number</span><br />
                        <span className="fs-6">+91 9740885332</span>
                        <span className="fs-6">  +91 9036465175</span>
                    </div>
                   
                    </li>
                    <li className='d-flex gap-3 align-item-center mb-4'>
                    <i class="bi bi-geo-alt"></i>
                    <div>
                        <span className="fs-5 fw-bold text-green">Address</span><br />
                        <span className="fs-6">Kodihalli village, Kalalughatta post, Thymagodlu Hobli, Nelamangala taluk, Bangalore Rural -562132</span>
                      
                    </div>
                    </li>
                </ul>
            </div>
        </div>
       </div>

       <div className="bg-green1 p-3 p-md-5">
       <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1941.318304907099!2d77.58669913835062!3d13.310625656916546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1e0c11f61181b%3A0xa61ea157661c59f4!2sKodihalli%20Village%2C%20Karnataka%20561203!5e0!3m2!1sen!2sin!4v1723438210467!5m2!1sen!2sin" width="600" height="450" className="border-0 rounded-4 w-100" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </div>
       <Feedback/>
    </section>
  )
}

export default Contact