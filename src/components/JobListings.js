import React from 'react';
import PropTypes from 'prop-types';
import JobCard from './JobCard'

export default function JobListings({jobs, saved, applied}) {
  return(
    <div className='job-listings'>
      {jobs.map(job => <JobCard job={job} />)}
    </div>
  )
}

JobListings.propTypes = {jobs: PropTypes.array}