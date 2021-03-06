import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import JobListings from './JobListings';

export default function JobCard({jobs, matchId}) {
  const jobMatch = jobs.find(job => job.id === matchId)
  const {company, location, title, url} = jobMatch

  return (
    <>
    {jobMatch &&
    <div className='job-card' id={matchId} key={matchId}>
      <div className="user-interactions">
        <button className="save-button">Save</button>
        <button className="applied-button">Mark Applied</button>
      </div>
      <h1 className='title'>{title}</h1>
      <a className="company-info" href={url}>{company}</a>
      <p className="location">{location}</p>
      <Link to={`/job/${matchId}`} className='details-button'>
        More Details
      </Link>
    </div>
    }
    </>
  )
}

JobListings.propTypes = {
  id: PropTypes.string, 
  title: PropTypes.string, 
  company: PropTypes.string, 
  location: PropTypes.string,
  url: PropTypes.string
}