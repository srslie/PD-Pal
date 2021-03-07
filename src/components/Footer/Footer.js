import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <Link to='/about'>About Site</Link>
      <Link to='/resources'>PD Resources</Link>
    </div>
  )
}