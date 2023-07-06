import React from 'react'
import { pageLinks } from '../data';
import { socialLinks } from '../data';
import { FaFacebook, FaTwitter, FaSquarespace } from 'react-icons/fa';
import'../styles/styles.css'
import Title from './Title';
const Header = () => {
  return (
    <section className='d-flex row container-fluide  hbg p-2' >
            <div className='col-4 flex-end d-flex justify-content-end mt-1'>
                <Title title='Road' subTitle='Trip'/>
            </div>
            <nav className='col-4'>
       <ul className='d-flex justify-content-center mt-3 grid gap-3 nav-text' style={{listStyle:'none'}}>
        {pageLinks.map(link => (
          <li key={link.id} >
            <a href={link.href}  style={{listStyle:'none'}} >{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
    <nav className='col-4 d-flex justify-content-center mt-3 grid gap-5 '>
    <ul className='d-flex justify-content-center grid gap-3 nav-text' style={{ listStyle: 'none' }}>
        {socialLinks.map(link => (
          <li key={link.id} className='hicons'>
            {link.icon === 'fab fa-facebook' && <FaFacebook />}
            {link.icon === 'fab fa-twitter' && <FaTwitter />}
            {link.icon === 'fab fa-squarespace' && <FaSquarespace />}
            <a href={link.href} style={{ listStyle: 'none' }} ></a>
          </li>
        ))}
        </ul> 
        
    </nav>
    </section>   
  )
        }
export default Header
