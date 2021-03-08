import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import JobListings from '../JobListings/JobListings';
import './JobCard.css';

export default function JobCard({jobs, matchId, checkIfMarked}) {
  const jobMatch = jobs.find(job => job.id === matchId)
  const {company, location, title, url, created} = jobMatch
  let isSaved = checkIfMarked(matchId, 'saved')
  let isApplied = checkIfMarked(matchId, 'applied')
  let markedCard = ''
  
  if (isSaved) {
    markedCard = 'mark-saved'
  } else if (isApplied) {
    markedCard = 'mark-applied'
  }

  return (
    <>
    {jobMatch &&
    <div className={`job-card ${markedCard}`} id={matchId} key={Date.now()}>
      <h2 className='job-title'>{title}</h2>
      <a className='company-info' href={url}>
        <p className='company-name'>{company}</p>
      </a>
      <p className="date-posted">Posted: {created}</p>
      <p className='location'>{location}</p>
      <Link className="details-link" to={`/job/${matchId}`} >
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
  jobs: PropTypes.object,
  matchId: PropTypes.string,
  checkIfMarked: PropTypes.func
}