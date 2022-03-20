import React from 'react'
import './About.css'


function About() {
  return (
    <>
      <div id='about'></div>
      <div className='about'>
        <div className='about__title'>
          <h1>About Me</h1>
        </div>
        <div className="about__info">
          <h3>Hey, I'm
            <span className='about__name'> Siddharth Kothari</span>
            .</h3>
          <p>I come from a small town called Hinganghat near Nagpur city. I am a 2021 Engineering graduate, completed my Bachelor of Engineering in Information Technology
            from Xavier Institute of Engineering, Mumbai with 7.33 CGPA.</p>
          <p>I have a good knowledge HTML, CSS, Bootstap, JavaScript and some JavaScript libraries.</p>
          <p>I am also familiar with MySQL, MongoDB, Python, Git and Github.</p>
          <p>I have about a year of personal experience in Web Development.</p>
          <p>I am currently looking for some good job opportunities.</p>
        </div>
      </div>
    </>
  )
}

export default About