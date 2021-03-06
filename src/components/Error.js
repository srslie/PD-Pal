import React from 'react';
import PropTypes from 'prop-types';

export default function Error({error}) {
  return(
    <div className="error">
      <p>Sorry, error: {error}. Try reloading!</p>
      <a href="mailto:aliceruppert@gmail.com">Contact for more support!</a>
    </div>
  )
}

Error.propTypes = {error: PropTypes.string}