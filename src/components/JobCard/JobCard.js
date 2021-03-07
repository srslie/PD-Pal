import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import JobListings from '../JobListings/JobListings';
import './JobCard.css';

export default function JobCard({jobs, matchId}) {
  const jobMatch = jobs.find(job => job.id === matchId)
  const {company, location, title, url, created} = jobMatch

  return (
    <>
    {jobMatch &&
    <div className='job-card' id={matchId} key={matchId}>
      <h2 className='job-title'>{title}</h2>
      <a className='company-info' href={url}>{company}</a>
      <p className="date-posted">Posted: {created}</p>
      <p className='location'>{location}</p>
      <Link to={`/job/${matchId}`} >
        <button className='details-button'>
          More Details
        </button>
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