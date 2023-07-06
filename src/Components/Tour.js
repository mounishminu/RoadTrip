
import React from 'react'

const Tour = ({image,date,title,info,location,duration,cost}) => {
  return (
    <article className='card text-center p-3 tourbg  '>
        <div>
            <img src={image} alt={title}/>
            <p className='bg-info  text-white text px-2'>{date}</p>
        </div>
        <div>
            <div>
                <h4>{title}</h4>
            </div>
            <p className='fst-italic'>{info}</p>
            <div className='d-flex row '>
                <p  className='col text-center'><span>
                <i className='fas fa-map '></i>
                </span></p>
                <p className='taxt-primary badge text-primary text-wrap fs-5 text-decoration-underline '>{location}</p>
                <p className='col text-center text-primary text-start'>from${cost}</p>
                <p className='col text-center text-primary text-end'>{duration}</p>
            </div>
        </div>
    </article>
  )
}

export default Tour;
