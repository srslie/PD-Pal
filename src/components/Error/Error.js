import React from 'react';
import PropTypes from 'prop-types';
import './Error.css';

export default function Error({error}) {

  return(
    <div className="error">
      <p className='error-text'>Sorry, error: {error}. Try reloading!</p>
      <a className='contact-link' href="mailto:aliceruppert@gmail.com">
        <button className='contact-button'>
          Contact for more support!
        </button>
      </a>
    </div>
  )
}

Error.propTypes = {error: PropTypes.string}