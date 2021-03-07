import React from 'react';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import JobListings from '../JobListings/JobListings';
import './Home.css';

export default function Home({jobs, saved, applied, error}) {
  return (
    <div className='home'>
    {error &&
      <Error error={error} />
    }
    {!error && jobs.length < 1 &&
      <Loading />
    }
    {jobs.length > 1 &&
      <JobListings jobs={jobs} saved={saved} applied={applied} />
    }
    </div>
  )
  
}