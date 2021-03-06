import React from 'react';
import JobListings from '../JobListings/JobListings';
import PropTypes from 'prop-types';
import './Saved.css';

export default function Saved({jobs, saved}) {
  const savedJobs = jobs.filter(job => saved.includes(job.id))

  let display = <p>No jobs saved yet</p>
  
  if (savedJobs.length > 0) {
    display = <JobListings jobs={savedJobs} />
  }

  return(
    <div className="saved">
      {display}
    </div>
  )
}

Saved.propTypes = {
  jobs: PropTypes.array, 
  saved: PropTypes.array
}