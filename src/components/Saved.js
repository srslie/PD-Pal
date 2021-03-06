import React from 'react';
import JobListings from './JobListings';
import PropTypes from 'prop-types';

export default function Saved({jobs, saved}) {
  const savedJobs = jobs.filter(job => saved.includes(job.id))

  return(
    <JobListings jobs={savedJobs} />
  )
}

Saved.propTypes = {
  jobs: PropTypes.array, 
  saved: PropTypes.array
}