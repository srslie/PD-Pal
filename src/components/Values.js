import React from 'react';
import {Link} from 'react-router-dom';


export default function Values() {
  const values = JSON.parse(localStorage.getItem('values'))
  return(
    <div className='values'>
      <h2 className='values-title'>Job Values</h2>
      <p className='values-info'>{values ? values : 'What are you working for?'}</p>
      <Link to='/account'>Update</Link>
    </div>
  )
}