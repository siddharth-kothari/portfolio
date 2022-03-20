import React from 'react'
import FooterOption from './FooterOption'
import './Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className='footer grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-1 '>
      <div className="footer__left  w-[305px] ml-auto mr-auto justify-items-center">
        <div className="footer__title">
          © {year}, Siddharth Kothari.
        </div>
      </div>


      <div className="footer__right w-[200px] ml-auto mr-auto align-middle">
        <FooterOption Icon={GitHubIcon} link='https://github.com/siddharth-kothari' />
        <FooterOption Icon={EmailIcon} link='mailto:sidkothari005@gmail.com' />
        <FooterOption Icon={LinkedInIcon} link='https://www.linkedin.com/in/siddharthkothari01/' />
      </div>
    </div>
  )
}

export default Footer



