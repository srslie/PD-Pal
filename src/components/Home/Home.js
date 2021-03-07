import React from 'react';
import PropTypes from 'prop-types';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import JobListings from '../JobListings/JobListings';
import './Home.css';

export default function Home({jobs, saved, applied, error, checkIfMarked}) {
  return (
    <div className='home'>
    {error &&
      <Error error={error} />
    }
    {!error && jobs.length < 1 &&
      <Loading />
    }
    {jobs.length > 1 &&
      <JobListings jobs={jobs} saved={saved} applied={applied} checkIfMarked={checkIfMarked}/>
    }
    </div>
  ) 
}

Home.propTypes = {
  jobs: PropTypes.array,
  saved: PropTypes.array,
  applied: PropTypes.array,
  error: PropTypes.string,
  checkIfMarked: PropTypes.func
}