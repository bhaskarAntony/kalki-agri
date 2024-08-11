import React from 'react'
import './style.css';
import aboutVideo from '../../assets/videos/about.mp4'

function About() {
  return (
    <section className='about-section container-fluid p-3 p-md-5'>
        <div className="row">
            <div className="col-md-6">
                <video src={aboutVideo} autoPlay muted loop className='w-100' style={{objectFit:'cover'}} data-aos="fade-up"></video>
            </div>
            <div className="col-md-6 mt-3">
                <h5 className="fs-6 text-green" data-aos="fade-up">ABOUT US</h5>
                <h1 className="display-5 text-green fw-bold" data-aos="fade-up">Meet the Minds Behind Our Modern Farm</h1>
                <p className="fs-5 text-green">At Kalki Agri, we're dedicated to helping farmers like you grow 
                their businesses. Our expert team provides innovative marketing 
                solutions to connect you with the right customers, at the right 
                time</p>
                <h3 className="fs-4">From crop to table, we've got you covered</h3>
                <ul>
                    <li data-aos="fade-up">Market research and analysis</li>
                    <li data-aos="fade-up"> Branding and advertising</li>
                    <li data-aos="fade-up"> Digital marketing and social media </li>
                    <li data-aos="fade-up"> Trade show and event promotion</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default About