import React from 'react';
import {Link} from 'react-router-dom';
import './Values.css';

export default function Values({user, values}) {
  return(
    <div className='values'>
      <span className='value-text'>
      <h2 className='values-title'>{user} Values</h2>
      <p className='values-info'>{values}</p>
      <Link to='/account'>
        <button className='update-values-button'>
          Update Values
        </button>
      </Link>
      </span>
    </div>
  )
}