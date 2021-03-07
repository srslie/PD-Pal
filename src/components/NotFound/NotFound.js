import React from 'react';
import {Link} from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return(
    <div className='not-found'>
      <h2 className='not-found-title'>Sorry, page not found.</h2>
      <Link to="/">Home</Link>
    </div>
  )
}