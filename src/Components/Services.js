import React from 'react'
import { services } from '../data'
import Service from './Service'
import Title from './Title'
import'../styles/styles.css'
const Services = () => {
  return (
    <section className='services mt-0'>
      <div className='mb-5'>
          <Title title='Our' subTitle='Services' />
      </div>

      <div className="services-container d-flex container">
        {services.map((service) => (
          <Service key={service.id} {...service} />
        ))}
      </div>
    </section>
  )
}

export default Services
