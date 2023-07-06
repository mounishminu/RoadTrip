import React from 'react'
import Services from './Services'

const Title = ({ title, subTitle }) => {
  return (
    <div className='text-center mt-3'>
      <h1>{title} <span className='text-primary'>{subTitle}</span></h1>
    </div>
  )
}

export default Title
