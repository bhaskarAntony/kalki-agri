import React from 'react'
import './style.css'
import video from '../../assets/videos/about.mp4'
import { Link } from 'react-router-dom'

function ReachOut() {
  return (
    <section className='reach-out container-fluid p-3 p-md-5'>
        <div className="row h-100 align-items-center">
            <div className="col-md-6">
                <div className="bg-green3 text-light p-4 rounded-4" data-aos="fade-up">
                    <h6 className="fs-6">Interested in our Services?</h6>
                    <h1 className="fs-1">Reach to us!</h1>
                    <p className="fs-6">We're here to support your agricultural journey. Whether you're looking to enhance your marketing strategies, improve product management, or explore new opportunities, our team is ready to assist. Connect with us today and let's work together to boost your farming success!</p>
                    <Link className='btn-green mt-3 px-4'>Contact us</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ReachOut