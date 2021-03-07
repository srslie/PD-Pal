import React from 'react';
import JobListings from '../JobListings/JobListings';
import PropTypes from 'prop-types';
import './Applied.css';

export default function Applied({jobs, applied, checkIfMarked}) {
  let appliedJobs = jobs.filter(job => applied.includes(job.id))

  const storedAppliedJobs = JSON.parse(localStorage.getItem('applied'))

  if (applied.length < storedAppliedJobs.length) {
    appliedJobs = jobs.filter(job => storedAppliedJobs.includes(job.id))
  }

  let display = <p>No jobs applied to yet</p>
  
  if (appliedJobs.length > 0) {
    display = <JobListings jobs={appliedJobs} checkIfMarked={checkIfMarked} />
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