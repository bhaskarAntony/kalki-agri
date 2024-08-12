import React from 'react'
import './style.css'
import visionimage from './vision.jpeg'
import Feedback from '../../components/feedback/Feedback';
import Aim from '../../components/aim/Aim';

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

function Vision() {
  return (
    <section className='about-container'>
        <div className="banner-top">
            <h1 className="fs-1 fw-bold text-light">Vision and Mision</h1>
           
        </div>
        <div className="container-fluid p-3 p-md-5 py-4">
                <div className="row">
                    <div className="col-md-6">
                        <h6 className="fs-6 text-green">Vision & Mision</h6>
                        <h1 className="fs-2 fw-bold text-green">Our Mision</h1>
                        <big className='text-secondary'><i>Enhancing Product Quality and Market Reach through Superior Packaging and Logistics</i></big>
                        <p className="fs-6 text-green mt-3">
                        To empower farmers by revolutionizing agricultural marketing through innovative digital solutions, efficient market hubs, and advanced product management, ensuring increased profitability, market access, and reduced market fluctuations
                        </p>
                        <hr />
                        <h1 className="fs-2 fw-bold text-green">Our Mision</h1>
                        <big className='text-secondary'><i>Implementing Cutting-Edge Strategies to Boost Farmer Incomes and Market Stability</i></big>
                        <p className="fs-6 text-green mt-3">
                        Our mission is to enhance farmers' incomes and market stability by implementing cutting-edge digital marketing platforms, establishing organized rural market hubs, and creating integrated sales models. We aim to provide farmers with essential market and price information, along with superior packaging and logistics solutions, to optimize their product quality and expand their market reach.
                        </p>
                        <h3 className="fs-4">New ideas and plans related to agricultural 
                        marketing</h3>
                <ul>
                    <li data-aos="fade-up">Digital Marketing Platforms</li>
                    <li data-aos="fade-up">Rural Market Hubs</li>
                    <li data-aos="fade-up">Ultra-Model Contributions</li>
                    <li data-aos="fade-up">Market and Price Information Applications</li>
                    <li data-aos="fade-up">Agricultural Product Management and 
                    Packaging</li>
                </ul>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center mt-4">
                        <img src={visionimage} alt="vision kalki agri" className="w-75 rounded-4 border-green" />
                    </div>
                </div>
            </div>

            <Aim/>
            <Feedback/>
    </section>
  )
}

export default Vision