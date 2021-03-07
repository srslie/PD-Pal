import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <Link to='/about' className='about-link'>About Site</Link>
      <Link to='/resources' className='resources-link'>PD Resources</Link>
    </div>
  )
}