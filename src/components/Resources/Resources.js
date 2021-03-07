import React from 'react';
import './Resources.css';

export default function Resources() {
  return (
    <div className="resources">
      <h2 className="resources-title">Professional Development Resources</h2>
      <p className="resources-info">Turing School empahasizes professional development. <br />
      <a href="https://github.com/turingschool/career-development-curriculum">
        <button className="pd-link">
          Find out more!
        </button>
      </a>
      </p>
    </div>
  )
}