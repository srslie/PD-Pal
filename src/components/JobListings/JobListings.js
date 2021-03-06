import React from 'react';
import PropTypes from 'prop-types';
import JobCard from '../JobCard/JobCard';
import './JobListings.css';

export default function JobListings({jobs, saved, applied}) {
  return(
    <div className='job-listings'>
      {jobs.map(job => <JobCard matchId={job.id} jobs={jobs} />)}
    </div>
  )
}

JobListings.propTypes = {jobs: PropTypes.array}