import React from 'react'
import Project from '../Extras/Project'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <div>
        <div className="portfolio" id='portfolio' smooth>
            <h2 className='page_title'>
            Selected Projects <span>I've Deployed</span>
            </h2>
            <div className="project_wrapper">
                <Project />
            </div>
        </div>
    </div>
  )
}

export default Portfolio