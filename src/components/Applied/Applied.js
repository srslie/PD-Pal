import React from 'react';
import JobListings from '../JobListings/JobListings';
import PropTypes from 'prop-types';
import './Applied.css';

export default function Applied({jobs, applied}) {
  const appliedJobs = jobs.filter(job => applied.includes(job.id))

  let display = <p>No jobs saved yet</p>
  
  if (appliedJobs.length > 0) {
    display = <JobListings jobs={appliedJobs} />
  }

  return (
    <div className="applied">
      {display}
    </div>
  )
}

Applied.propTypes = {
  jobs: PropTypes.array, 
  applied: PropTypes.array
}