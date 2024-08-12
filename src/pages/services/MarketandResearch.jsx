import React from 'react'
import Banner from './Banner'
import Overview from './Overview'
import image from './images/marketing.jpeg'
import { Link } from 'react-router-dom'
import Feedback from '../../components/feedback/Feedback'
import CaseStudeis from './CaseStudeis'

function MarketandResearch() {
  return (
    <section className='service-container'>
       <Banner title="Market Research and Analysis for Agriculture" subtitle="Your gateway to understanding and leveraging market dynamics in the agricultural sector."/>
       <Overview title="Market Research and Analysis for Agriculture" content="In the ever-evolving agricultural industry, staying ahead of market trends is crucial for success. Our comprehensive market research and analysis services are designed to provide you with actionable insights to make informed decisions. Whether you're looking to understand emerging trends, analyze competitive landscapes, or gauge consumer preferences, we offer tailored solutions to help you navigate the complexities of the agricultural market." image={image}/>
       <CaseStudeis content="Discover how our branding and advertising services have transformed businesses and driven success. Our case studies highlight successful projects and the measurable impact of our strategies."/>
       <Feedback/>
     
    </section>
  )
}

export default MarketandResearch