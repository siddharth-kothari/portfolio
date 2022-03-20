import React from 'react'
import './ResumeOption.css'

function ResumeOption({Icon, detail}) {
  return (
    <div className='resumeOption'>
        {Icon &&  <Icon className='icon'/>}
        <p className="detail">{detail}</p>
    </div>
  )
}

export default ResumeOption;