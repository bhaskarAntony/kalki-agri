import React from 'react'
import './style.css'
import image1 from './images/image1.jpeg'
import image2 from './images/image2.jpeg'
import image3 from './images/image3.jpeg'
import image4 from './images/image4.jpeg'
import image5 from './images/image5.jpeg'
import image6 from './images/image6.jpeg'

const data = [
    {
        title: 'Digital Marketing Platforms',
        desc: 'Farmers can use digital platforms to sell their products directly to consumers, reducing the number of middlemen and increasing profitability.',
        image:image1
    },
    {
        title: 'Rural Market Hubs',
        desc: 'By establishing organized and high-quality market hubs in rural areas, farmers can directly connect with consumers and get better prices.',
        image:image2
    },
    {
        title: 'Ultra-Model Contributions',
        desc: 'Creating new models that allow farmers to sell multiple products on a single platform, facilitating the sale of various products together.',
        image:image3
    },
    {
        title: 'Market and Price Information Applications',
        desc: 'Developing applications that provide farmers with local and national market price information to help them make informed business decisions.',
        image:image4
    },
    {
        title: 'Agricultural Product Management and Packaging',
        desc: 'Providing better packaging, storage, and logistics solutions to improve the quality of farmers\' products and increase their market reach.',
        image:image5
    },
    {
        title: 'Collaborative Farming Initiatives',
        desc: 'Encouraging farmers to form cooperatives or partnerships to pool resources, share knowledge, and collectively market their products for better bargaining power and market access.',
        image:image6
    }
];


function Aim() {
  return (
    <section className='container-fluid p-3 p-md-5 bg-orange1'>
        <div className="text-center">
            <h1 className="fs-1 fw-bold text-green" data-aos="fade-up">Innovative Agricultural Marketing Strategies</h1>
            <p className="fs-5 text-green" data-aos="fade-up">Empowering Farmers and Enhancing Market Access</p>
          
        </div>

        <div className="row mt-5">
        {
                data.map((item, index)=>(
                    <div className="col-md-4 mb-3" >
                        <div className=" border-green bg-orange2 p-3 h-100 rounded-4" data-aos="fade-up">
                            <img src={item.image} alt={item.title} className="w-100 rounded-4 mb-3" />
                            <h1 className="fs-4 text-green">{item.title}</h1>
                            <p className="fs-6 text-green">{item.desc}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Aim