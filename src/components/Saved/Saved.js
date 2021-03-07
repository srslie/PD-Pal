import React from 'react';
import JobListings from '../JobListings/JobListings';
import PropTypes from 'prop-types';
import './Saved.css';

export default function Saved({jobs, saved, checkIfMarked}) {
  let savedJobs = jobs.filter(job => saved.includes(job.id))

  const storedSavedJobs = JSON.parse(localStorage.getItem('saved'))

  if (saved.length < storedSavedJobs.length) {
    savedJobs = jobs.filter(job => storedSavedJobs.includes(job.id))
  }

  let display = <p>No jobs saved yet</p>
  
  if (savedJobs.length > 0) {
    display = <JobListings jobs={savedJobs} checkIfMarked={checkIfMarked} />
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