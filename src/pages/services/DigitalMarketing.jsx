import React from 'react'
import Banner from './Banner'
import Overview from './Overview'
import image from './images/digitalmarketing.jpeg'
import { Link } from 'react-router-dom'
import Feedback from '../../components/feedback/Feedback'
import CaseStudeis from './CaseStudeis'

function DigitalMarketing() {
  return (
    <section className='service-container'>
       <Banner title="Digital Marketing and Social Media Services" subtitle="Maximize your online presence with our strategic digital marketing and social media solutions."/>
       <Overview title="Digital Marketing and Social Media Services" content="In the digital age, a robust online presence is essential for business success. Our digital marketing and social media services are designed to help you reach and engage your audience effectively. From crafting targeted digital marketing strategies to managing dynamic social media campaigns, we provide solutions that drive growth and enhance your brand’s visibility." image={image}/>
       <CaseStudeis content="Explore how our digital marketing and social media services have helped businesses grow and succeed. Our case studies demonstrate the impact of our strategies and showcase successful projects and results."/>
       <Feedback/>
     
    </section>
  )
}

export default DigitalMarketing