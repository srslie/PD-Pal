import React from 'react';
import Error from './Error';
import Loading from './Loading';
import JobListings from './JobListings';
import Values from './Values';

export default function Home({jobs, saved, applied, error}) {
  return (
    <>
    <Values/>
    {error &&
      <Error error={error} />
    }
    {!error && jobs.length < 1 &&
      <Loading />
    }
    {jobs.length > 1 &&
      <JobListings jobs={jobs} saved={saved} applied={applied} />
    }
    </>
  )
  
}