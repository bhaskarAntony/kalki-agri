import React from 'react'
import './style.css'
import aboutimage from './aboutimage.jpeg'
import Feedback from '../../components/feedback/Feedback';

const data = [
    {
        title: 'Digital Marketing Platforms',
        points: [
            {
                heading: 'Increased Profitability',
                desc: 'By selling directly to consumers, farmers can eliminate middlemen and retain a larger share of the profits.'
            },
            {
                heading: 'Wider Market Reach',
                desc: 'Digital platforms allow farmers to reach consumers beyond their local markets, expanding their customer base.'
            },
            {
                heading: 'Real-Time Sales Tracking',
                desc: 'Farmers can monitor sales, inventory, and customer preferences instantly.'
            }
        ]
    },
    {
        title: 'Rural Market Hubs',
        points: [
            {
                heading: 'Direct Consumer Interaction',
                desc: 'Farmers can engage directly with consumers, leading to better pricing and understanding of market demands.'
            },
            {
                heading: 'Reduced Transportation Costs',
                desc: 'Organized hubs in rural areas minimize the need for long-distance transportation, saving costs.'
            },
            {
                heading: 'Community Development',
                desc: 'Market hubs can boost the local economy by attracting more business and creating jobs.'
            }
        ]
    },
    {
        title: 'Ultra-Model Contributions',
        points: [
            {
                heading: 'Diversified Income',
                desc: 'Farmers can sell multiple products on a single platform, reducing dependency on a single crop and increasing income stability.'
            },
            {
                heading: 'Streamlined Sales Process',
                desc: 'Selling various products together on one platform simplifies the sales process and enhances efficiency.'
            },
            {
                heading: 'Increased Consumer Choice',
                desc: 'Offering a variety of products attracts more customers and can lead to higher sales.'
            }
        ]
    },
    {
        title: 'Market and Price Information Applications',
        points: [
            {
                heading: 'Informed Decision-Making',
                desc: 'Access to real-time price information helps farmers decide when and where to sell their products for maximum profit.'
            },
            {
                heading: 'Market Trend Analysis',
                desc: 'Farmers can analyze market trends and adjust their production and sales strategies accordingly.'
            },
            {
                heading: 'Risk Reduction',
                desc: 'Knowledge of market prices reduces the risk of being underpaid or facing unexpected market fluctuations.'
            }
        ]
    },
    {
        title: 'Agricultural Product Management and Packaging',
        points: [
            {
                heading: 'Improved Product Quality',
                desc: 'Better packaging and storage maintain product freshness and quality, leading to higher market value.'
            },
            {
                heading: 'Extended Shelf Life',
                desc: 'Proper packaging can extend the shelf life of products, reducing waste and increasing sales opportunities.'
            },
            {
                heading: 'Enhanced Brand Image',
                desc: 'Professionally packaged products create a more appealing brand image, attracting more consumers.'
            }
        ]
    },
    {
        title: 'Collaborative Farming Initiatives',
        points: [
            {
                heading: 'Shared Resources',
                desc: 'Farmers can pool resources, such as equipment and knowledge, reducing costs and improving efficiency.'
            },
            {
                heading: 'Stronger Bargaining Power',
                desc: 'Collaboratives can negotiate better prices and terms with buyers due to the increased volume of products.'
            },
            {
                heading: 'Community Support',
                desc: 'Collaboration fosters a sense of community and support among farmers, leading to shared success and innovation.'
            }
        ]
    }
];

function About() {
  return (
    <section className='about-container'>
        <div className="banner-top">
            <h1 className="fs-1 fw-bold text-light">About us</h1>
           
        </div>
        <div className="container-fluid p-3 p-md-5 py-4">
                <div className="row">
                    <div className="col-md-6">
                        <h6 className="fs-6 text-green">ABOUT US</h6>
                        <h1 className="fs-1 fw-bold text-green">Meet the Minds Behind Our Modern Farm</h1>
                        <p className="fs-5 text-green mt-3">
                        At Kalki Agri, we're dedicated to helping farmers like you grow their businesses. Our expert team provides innovative marketing solutions to connect you with the right customers, at the right time
                        </p>
                        <h3 className="fs-4">From crop to table, we've got you covered</h3>
                <ul>
                    <li data-aos="fade-up">Market research and analysis</li>
                    <li data-aos="fade-up"> Branding and advertising</li>
                    <li data-aos="fade-up"> Digital marketing and social media </li>
                    <li data-aos="fade-up"> Trade show and event promotion</li>
                </ul>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center mt-4">
                        <img src={aboutimage} alt="about kalki agri" className="w-75 rounded-4 border-green" />
                    </div>
                </div>
            </div>

            <div className="bg-lightgreen p-3 p-md-5 benifits">
                <h1 className="fs-1 fw-bold text-center mb-1">New ideas and plans related to agricultural 
                marketing</h1>
                <p className="fs-5 text-green text-center mb-5">Here are our new ideas</p>

                <div className="row">
                    {
                        data.map((item, index)=>(
                            <div className="col-md-4 mb-3">
                                <div className="bg-green3 p-3 text-light h-100 d-flex flex-column justify-content-between rounded-4 text-center" style={{border:"2px solid #0c0c0c"}}>
                                    <h1 className="fs-4">{item.title}</h1>

                                  <div className="points mt-4">
                                  {
                                        item.points.map((subitem, subindex)=>(
                                            <div className='bg-green1 p-2 mb-3 text-start rounded-4'  style={{border:"2px solid #0c0c0c"}}>
                                            <h6 className="fs-6 text-green fw-bold">{subitem.heading}</h6>
                                            <p className="fs-6 mb-0">{subitem.desc}</p>
                                            </div>
                                        ))
                                    }
                                  </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Feedback/>
    </section>
  )
}

export default About