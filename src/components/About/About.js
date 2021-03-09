import React from 'react';
import './About.css';

export default function About() {
  return(
    <div className="about">
      <h2 className="about-title">About PD-Pal</h2>
      <p className="about-info">
        This project was coded by <a className='alice-link' href="https://github.com/srslie"><button className='alice-button'>Alice Ruppert</button></a> following a <a className='turing-link' href="https://turing.io">spec by Turing School Staff</a>. 
        <br />
        <br />
        This was the final solo project for Mod 3.
      </p>
    </div>
  )
}