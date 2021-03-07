import React from 'react';
import PropTypes from 'prop-types';
import './JobDetail.css';

export default function JobDetail({matchId, jobs}) {
  const jobMatch = jobs.find(job => job.id === matchId)
  const {company, description, title, location, url} = jobMatch
  return (
    <div className='job-detail'>
    {jobMatch &&
    <div className='job-card job-detail-card' id={matchId} key={matchId}>
      <h1 className='title'>{title}</h1>
      <a className="company-info" href={url}>{company}</a>
      <p className="location">{location}</p>
      <p className="description">{description}</p>
      <div className="user-interactions">
        <button className="save-button">Save</button>
        <button className="applied-button">Mark Applied</button>
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