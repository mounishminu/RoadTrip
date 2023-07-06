import React from 'react'
import abtimg from '../Images/about.jpg'
import'../styles/styles.css'
import Title from './Title'
const About = () => {
  return (
    <section className='about container-fluid abtbg '>
      <div className='mb-5'> 
          <Title title='About' subTitle='Us' />
      </div>

        <div className='d-flex row mt-5'>
            <div className='col-6 text-center'>
               <img src={abtimg} alt='about' className='abtimg'/> 
            </div>
            <article className='col-6 abttxt'>
                <h3>Explore The Difference</h3>
                <p className='fst-italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada risus in risus pharetra, sit amet iaculis sapien congue. Nulla facilisi. </p>
                <p className='fst-italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada risus in risus pharetra, sit amet iaculis sapien congue. Nulla facilisi. </p>
                <a href='#' className='btn bg-primary'>ReadMore</a>
            </article>
        </div>
    </section>
  )
}

export default About