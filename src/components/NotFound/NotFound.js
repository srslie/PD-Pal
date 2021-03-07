import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return(
    <>
    <div className='not-found'>
      <div className='not-found-overlay'>
        <h1 className='not-found-code'>404:</h1>
        <h2 className='not-found-title'>Sorry, page not found.</h2>
        <Link to="/" className='home-link' >
          <button className='home-link-button'>
            Home
          </button>
        </Link>
      </div>
    </div>
    </>
  )
}