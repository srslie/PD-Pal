import React from 'react';
import PropTypes from 'prop-types';
import './JobDetail.css';
import Error from '../Error/Error';

export default function JobDetail({matchId, jobs, updateProperty, checkIfMarked}) {  
  const jobMatch = jobs.find(job => job.id === matchId)
  if (!jobMatch) {
    return (
      <Error error={'Problem loading job'}/> 
    )
  } else {
  const {company, description, title, location, url, created} = jobMatch
  let isSaved = checkIfMarked(matchId, 'saved')
  let isApplied = checkIfMarked(matchId, 'applied')
  let markedCard = ''
  
  if (isSaved) {
    markedCard = 'mark-saved'
  } else if (isApplied) {
    markedCard = 'mark-applied'
  }
  
  const handleSave = event => {
    event.preventDefault()
    updateProperty(matchId, 'saved')
  }

  const handleApplied = event => {
    event.preventDefault()
    updateProperty(matchId, 'applied')
  }

  return (
    <div className='job-detail'>
    {jobMatch &&
    <div className={`job-card job-detail-card ${markedCard}`} id={matchId} key={matchId}>
      <h1 className='title'>{title}</h1>
      <p className='company'>{company}</p>
      <p className='date-posted'>Posted: {created}</p>
      <p className='location'>{location}</p>
      <a className='full-info-link' href={url}>
        <button>
          Full Job Posting
        </button>
      </a>
      <p className="description">{description}</p>
      <div className="user-interactions">
        <button className={`save-button ${isSaved ? 'marked': ''}`} onClick={handleSave}>
          {isSaved ? 'Saved!' : 'Save'}
        </button>
        <button className={`applied-button ${isApplied ? 'marked': ''}`} onClick={handleApplied}>
          {isApplied ? 'Applied!' : 'Mark Applied'}
        </button>
      </div>
    </div>
    }
    </div>
  )
  }
}

JobDetail.propTypes = {
  matchId: PropTypes.string, 
  jobs: PropTypes.array, 
  updateProperty: PropTypes.func,
  checkIfMarked: PropTypes.func 
}