import React from 'react'
import'../styles/styles.css' 
import Title from './Title'
const Banner = () => {
  return (
    <section className='bnr container-fluid'>
    <div className='text-center mt-5 '>
      <div className='bnrh'>
        <Title title='Road' subTitle='Trip' />
      </div>
        <p className='bnrtxt fst-italic'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        <a href='#tours' className='btn bg-primary'>Explore Tours</a>
    </div>
    </section>
  )
}

export default Banner