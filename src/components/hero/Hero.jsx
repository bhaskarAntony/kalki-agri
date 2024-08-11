import React from 'react'
import './style.css'
function Hero() {
  return (
    <section className='hero container-fluid p-4 p-md-5 py-5'>
        <div className="row">
            <div className="col-md-6">
                <h1 className="fs-5" data-aos="fade-right">Innovative Marketing Solutions to Connect Farmers with Customers</h1>
                <h1 className="display-4 fw-bold text-green" data-aos="fade-up">Growing Your Farm, One Connection at a Time at <span className="text-orange">kalki Agri</span></h1>
                <p className="fs-6 text-gray" data-aos="fade-down">At Kalki Agri, we're dedicated to helping farmers like you grow 
                their businesses. Our expert team provides innovative marketing 
                solutions to connect you with the right customers, at the right 
                time. </p>
                <div className="btns d-flex flex-wrap gap-3">
                    <button className="btn-green px-4" data-aos="fade-right">Explore Our Services</button>
                    <button className="btn-orange px-4" data-aos="fade-right">Contact us</button>
                </div>
            </div>
            <div className="col-md-6 mt-3 mt-md-0 d-flex align-items-center justify-content-center">
                <img src="https://img.freepik.com/free-photo/smart-farming-5-0-green-plant-product-agricultural-technology-social-media-post-background_53876-96918.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid" alt="" className="w-75 rounded-5 border-green" />
            </div>
        </div>
    </section>
  )
}

export default Hero