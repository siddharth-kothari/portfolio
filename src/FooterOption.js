import React from 'react';
import './FooterOption.css';


function FooterOption({ Icon, link }) {
  

  return (
    <div className='footerOption'>
      <a href={link}>
        {Icon &&  <Icon className='footerOption__icon'/>}
      </a>
    </div>
  )
}

export default FooterOption;