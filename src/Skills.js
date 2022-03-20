import React from 'react'
import './Skills.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SkillOption from './SkillOption';


function Skills() {
  return (
    <>
    <div id="skills"></div>
    <div className='skill'>
      <div className='skill__title'>
        <h1>My Skills</h1>
      </div>
      <div className="skill__img grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-10">
        <SkillOption img='/logos/html-5.svg' title='HTML5' />
        <SkillOption img='/logos/css-3.svg' title='CSS3' />
        <SkillOption img='/logos/bootstrap.svg' title='Bootstrap' />
        <SkillOption img='/logos/js.svg' title='JavaScript' />
        <SkillOption img='/logos/react.svg' title='ReactJS' />
        <SkillOption img='/logos/git.svg' title='Git' />
      

      </div>


    </div>
    </>
  )
}

export default Skills