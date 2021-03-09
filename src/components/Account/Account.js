import React from 'react';
import PropTypes from 'prop-types';
import './Account.css';

export default function Account({user, values, updateText}) {
  const userClick = event => {
    event.preventDefault()
    const text = document.querySelector('.name-input').value + "'s"
    updateText(text, 'user')
  }

  const valuesClick = event => {
    event.preventDefault()
    const text = document.querySelector('.values-input').value
    updateText(text, 'values')
  }

  return (
    <div className='account'>
      <div className='account-name'>
        <h2 className='account-name-title'>{user} Account</h2>
        <input className="name-input" type="text" placeholder="Your Name"></input>
        <button className='name-button' onClick={userClick}>
          Update Name
        </button>
      </div>
      <div className='account-values'>
        <h2 className='account-values-title'>Values</h2>
        <p className='account-values-text'>{values}</p>
        <input className="values-input" type="text" placeholder="Values or Mission Statement"></input>
        <button className='values-button' onClick={valuesClick}>
          Update Values
        </button>
      </div>  
    </div>
  )
}

Account.propTypes = {
  user: PropTypes.string,
  values: PropTypes.string,
  updateText: PropTypes.func
}