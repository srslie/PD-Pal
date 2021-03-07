import React from 'react';
import PropTypes from 'prop-types';
import JobCard from '../JobCard/JobCard';
import './JobListings.css';

export default function JobListings({jobs, checkIfMarked}) {
  return(
    <div className='job-listings'>
      {jobs.map(job => <JobCard matchId={job.id} jobs={jobs} checkIfMarked={checkIfMarked} />)}
    </div>
  )
}

JobListings.propTypes = {jobs: PropTypes.array}