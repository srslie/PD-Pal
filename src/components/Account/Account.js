import React from 'react';
import './Account.css';

export default function Account({user, values, updateUser, updateValues}) {
  const userClick = event => {
    event.preventDefault()
  }
  const valuesClick = event => {
    event.preventDefault()
    
  }
  return (
    <div className='account'>
      <h2>{user} Account</h2>
      <input type="text" placeholder="Your Name"></input>
      <button className='name-button' onClick={userClick}>Update Name</button>
      <h2>Values</h2>
      <p className='account-values'>{values}</p>
      <input type="text" placeholder="Your Name"></input>
      <button className='values-button' onClick={valuesClick}>Update Values</button>
    </div>
  )
}