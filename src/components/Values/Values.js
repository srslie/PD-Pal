import React from 'react';
import {Link} from 'react-router-dom';
import './Values.css';


export default function Values({user, values}) {
  
  return(
    <div className='values'>
      <h2 className='values-title'>Job Values</h2>
      <p className='values-info'>{values ? values : 'What are you working for?'}</p>
      <Link to='/account'>Update Values</Link>
    </div>
  )
}