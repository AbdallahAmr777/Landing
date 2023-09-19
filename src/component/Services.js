import React from 'react'
import Data from '../Data'
import ServicesItem from './ServicesItem'
import "./Services.css"
import online from "../assets/online-world-ba029cf8887f4299446296263ab79b61.svg"

const Services = () => {
    const items =Data.service.map((item)=>{
        return(
            <div className='col-md-4'>
                <ServicesItem title={item.title} text={item.text} icon={item.icon}/>
            </div>
        )
    })
    return(
        <section className='services'>
            <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12'>
                            <h2>our Services</h2>
                            <p>We craft digital, graphic and dimensional thinking, to create category leading brand <br/>
                                experiences that have meaning and add a value for our clients.</p>
                        </div>
                    </div>
                    <div className='row'>
                            {items}
                    </div>
                    <div className='row last'>
                          <div className='col-md-6'>
                            <h3>A digital web design studio creating modern & engaging online experiences</h3>
                            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.<br/>
                             A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            <ul>
                                <li>We put a lot of effort in design.</li>
                                <li>The most important ingredient of successful website.</li>
                                <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
                                <li>Submit Your Orgnization.</li>
                            </ul>
                            <button>Learn More</button>
                          </div>
                          <div className='col-md-6'>
                            <img src={online} alt={online.title}/>
                          </div>
                    </div>
                </div>
            </section>
    )
}

export default Services
