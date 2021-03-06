import React from 'react';
import JobListings from './JobListings';
import PropTypes from 'prop-types';

export default function Applied({jobs, applied}) {
  const appliedJobs = jobs.filter(job => applied.includes(job.id))

  return(
    <JobListings jobs={appliedJobs} />
  )
}

Applied.propTypes = {
  jobs: PropTypes.array, 
  applied: PropTypes.array
}