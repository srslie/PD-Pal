import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      <Link to='/' className='logo'>PD-Pal</Link>
      <Link to='/saved'>Saved Jobs</Link>
      <Link to='/applied'>Jobs Applied To</Link>
      <Link to='./account'>Account</Link>
    </div>
  )
}