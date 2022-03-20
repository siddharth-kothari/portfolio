import React from 'react'
import './Intro.css'

function Intro() {
  return (
    <div className='intro'>
      <div className="intro__info">
        <h4 className=''>Hi, I'm 
         <span className="intro__name" > Siddharth</span>
        </h4>
        <p className="intro__description">I am an Entry-level Front-end Developer. I hail from a small town 
          <span className="intro__city"> Hinganghat </span> 
        near Nagpur city.</p>
        <p className="intro__job">Currently seeking good job opportunities.</p>
      </div>
    </div>
  )
}

export default Intro