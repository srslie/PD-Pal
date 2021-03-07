import React from 'react';
import PropTypes from 'prop-types';
import './JobDetail.css';

export default function JobDetail({matchId, jobs, updateSaved, updateApplied}) {
  const jobMatch = jobs.find(job => job.id === matchId)
  const {company, description, title, location, url} = jobMatch

  const handleSave = event => {
    event.preventDefault()
    updateSaved(matchId)
  }

  const handleApplied = event => {
    event.preventDefault()
    updateApplied()
  }

  return (
    <div className='job-detail'>
    {jobMatch &&
    <div className='job-card job-detail-card' id={matchId} key={matchId}>
      <h1 className='title'>{title}</h1>
      <p className='company'>{company}</p>
      <p className="location">{location}</p>
      <a className="full-info-link" href={url}>
        <button>
          Full Job Posting
        </button>
      </a>
      <p className="description">{description}</p>
      <div className="user-interactions">
        <button className="save-button" onClick={handleSave}>Save</button>
        <button className="applied-button" onClick={handleApplied}>Mark Applied</button>
      </div>
    </div>
    }
    </div>
  )
}

JobDetail.propTypes = {
  id: PropTypes.string, 
  title: PropTypes.string, 
  description: PropTypes.string,
  company: PropTypes.string, 
  location: PropTypes.string,
  url: PropTypes.string
}