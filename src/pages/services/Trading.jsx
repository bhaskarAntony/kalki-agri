import React from 'react'
import Banner from './Banner'
import Overview from './Overview'
import image from './images/trading.jpeg'
import { Link } from 'react-router-dom'
import Feedback from '../../components/feedback/Feedback'
import CaseStudeis from './CaseStudeis'

function Trading() {
  return (
    <section className='service-container'>
       <Banner title="Trade Show and Event Promotion Services" subtitle="Create unforgettable experiences and drive engagement with our expert event promotion solutions."/>
       <Overview title="Trade Show and Event Promotion Services" content="Effective promotion is key to a successful trade show or event. Our Trade Show and Event Promotion services are designed to help you attract the right audience, maximize visibility, and achieve your event goals. From strategic planning and marketing to on-site management and post-event follow-up, we provide comprehensive solutions to ensure your event stands out and delivers results." image={image}/>
       <CaseStudeis content="See how our Trade Show and Event Promotion services have helped clients achieve their event goals. Our case studies highlight successful projects and the positive impact of our promotional strategies."/>
       <Feedback/>
     
    </section>
  )
}

export default Trading