import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './Values.css';

export default function Values({user, values}) {
  let valueCheck = values === 'What are you working for?' ? true : false

  return(
    <div className='values'>
      <span className='values-text'>
        <p className='values-title'>{user} Values:</p>
        <h2 className='values-info'>{values}</h2>
        {valueCheck && 
        <Link to='/account'>
            <button className='update-values-button'>
              Update Values
            </button>
        </Link>
      }
      </span>
    </div>
  )
}

Values.propTypes = {
  user: PropTypes.string, 
  values: PropTypes.string,
}