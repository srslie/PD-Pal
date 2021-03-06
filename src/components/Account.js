import React from 'react';

export default function Account({user, values}) {
  return (
    <div className='account'>
      <h2>{user} Account</h2>
      <button className='name-button'>Update Name</button>
      <h3>Values</h3>
      <p className='account-values'>{values}</p>
      <button className='values-button'>Update Values</button>
    </div>
  )
}