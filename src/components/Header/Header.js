import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './Header.css';
import Values from '../Values/Values'

export default function Header({user, values}) {
  return (
    <div className='header'>
      <div className="header-links"> 
        <Link to='/' className='logo'>
          <button className='logo-button'>
            <h1>PD-Pal</h1>
          </button>
        </Link>
        <Link to='/saved' className='saved-link'>
          Saved
        </Link>
        <Link to='/applied' className='applied-link'>
          Applied To
        </Link>
        <Link to='./account' className='account-link'>
          Account
        </Link>
      </div>
      <Values user={user} values={values} />
    </div>
  )
}

Header.propTypes = {
  user: PropTypes.string,
  values: PropTypes.string
}