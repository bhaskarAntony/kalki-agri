import React from 'react'
import './style.css'
import video from '../../assets/videos/about.mp4'
import { Link } from 'react-router-dom'

function CaseStudeis({content}) {
  return (
    <section className='reach-out container-fluid p-3 p-md-5'>
        <div className="row h-100 align-items-center">
            <div className="col-md-6">
                <div className="bg-green3 text-light p-4 rounded-4" data-aos="fade-up">
                    <h6 className="fs-6">Kalki Agri</h6>
                    <h1 className="fs-1">Case Studies</h1>
                    <p className="fs-6">{content}</p>
                    <Link className='btn-green mt-3 px-4'>About us</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CaseStudeis