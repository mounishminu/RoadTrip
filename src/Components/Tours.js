import React from 'react'
import Title from './Title'
import { tours } from '../data'
import Tour from './Tour'
import'../styles/styles.css'
const Tours = () => {
  return (
    <section className='container mt-3'>
        <Title title='Featured' subTitle='Tours'/>
        <div className=' toursgrid gap-3 mt-3 row-gap-3'>
            {tours.map((tour)=>{
            return <Tour {...tour} key={tour.id}/>
            })}
            
        </div>
    </section>
  )
}

export default Tours