
import React from 'react';
import { pageLinks } from '../data';
import { socialLinks } from '../data';
import { FaFacebook, FaTwitter, FaSquarespace } from 'react-icons/fa';
import '../styles/styles.css';

const Footer = () => {
  return (
    <footer className='bg-primary-subtle  p-5 mt-5'>
      <ul className='d-flex justify-content-center grid gap-3 nav-text' style={{ listStyle: 'none' }}>
        {pageLinks.map(link => (
          <li key={link.id} >
            <a href={link.href} style={{ listStyle: 'none' }} >{link.text}</a>
          </li>
        ))}
      </ul>
      <ul className='d-flex justify-content-center grid gap-3 nav-text' style={{ listStyle: 'none' }}>
        {socialLinks.map(link => (
          <li key={link.id} className='text-primary fs-4 ' >
            {link.icon === 'fab fa-facebook' && <FaFacebook />}
            {link.icon === 'fab fa-twitter' && <FaTwitter />}
            {link.icon === 'fab fa-squarespace' && <FaSquarespace />}
            <a href={link.href} style={{ listStyle: 'none' }} ></a>
          </li>
        ))}
      </ul>
      <div className='text-center text-danger fs-6 fw-bold'>
        <p > Copyrights &copy; RoadTrip Travels Tour Company
          <span>{new Date().getFullYear()}</span>,All rights Reveserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
