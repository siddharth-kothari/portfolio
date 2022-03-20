import React from 'react'
import './Resume.css'
import ResumeOption from './ResumeOption'
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Header from './Header';
import Footer from './Footer';
import { saveAs } from "file-saver";

function Resume() {
  document.title = 'Siddharth Kothari | Resume'
  const downloadResume = () => {
    saveAs(
      "https://drive.google.com/file/d/1F1xjgOyLVsHyY0GIrKNZB-1UMfp8ztKm/view?usp=sharing",
      "Resume_SiddharthKothari.pdf"
    )
  }
  return (
    
    <div className='resume'>
    <Header />
      <div className="resume__body">
        <div className="resume__left">
          <img src="https://cdn.discordapp.com/attachments/702877439264686150/944601282981793822/main_pic.jpg" alt="img of siddharth kothart" className="pic" />
          <div className="resume__contact">
            <ResumeOption Icon={CallIcon} detail='+91-8208567642' />
            <ResumeOption Icon={MailIcon} detail='sidkothari005@gmail.com' />
            <ResumeOption Icon={LocationOnIcon} detail='Nagpur, Maharashtra' />
            <ResumeOption Icon={LanguageIcon} detail='https://siddharth-kothari.netlify.app/' />
            <ResumeOption Icon={LinkedInIcon} detail='linkedin.com/in/siddharthkothari01/' />
            <ResumeOption Icon={GitHubIcon} detail='github.com/siddharth-kothari' />
          </div>
          <h4>S K I L L S</h4>
          <ul>
            <li>HTML5</li>
            <li>CSS5</li>
            <li>JavaScript</li>
            <li>ReactJs</li>
            <li>NodeJS</li>
            <li>Python</li>
            <li>MongoDB</li>
          </ul>

          <h4>L A N G U A G E S</h4>
          <ul>
            <li>Engilsh</li>
            <li>Hindi</li>
            <li>Marathi</li>
          </ul>

          <h4>I N T E R E S T S</h4>
          <div className="interest">
            <ResumeOption Icon={CameraAltIcon} detail='Photography' />
            <ResumeOption Icon={SportsEsportsIcon} detail='Gaming' />
            <ResumeOption Icon={TravelExploreIcon} detail='Travelling' />
            <ResumeOption Icon={AutoStoriesIcon} detail='Reading' />
          </div>
        </div>
        <div className="resume__right">
          <h1>SIDDHARTH KOTHARI</h1>

          <h3>E X P E R I E N C E</h3>
          <h4>Intern</h4>
          <h5>i2e Consulting Pvt. Ltd |  March 2022 - Present</h5>
          <ul>
            <li>• Created webpages for the company's website and external projects.</li>
            <li>• Working on company's internal project called Pats.</li>
          </ul>

          <h4>Software Testing Intern</h4>
          <h5>Ministry of Electronics and Information Technology | Jan 2021 - May 2021</h5>
          <ul>
            <li>• Manually tested organization’s site and versatile application to guarantee their smooth working.</li>
            <li>• Drafted 5+ point by point reports of loopholes and submitted to my lead.</li>
            <li>• Reported mistakes in the User Interface plan or usefulness for fixing.</li>
          </ul>

          <h3>E D U C A T I O N</h3>
          <h4>Xavier Institute of Engineering, Mumbai</h4>
          <p>Bachelor of Engineering, Information Technology | 7.33 CGPA</p>
          <p>Aug 2017 - July 2021</p>
          
         
          <h4>G.B.M.M Jr College, Hinganghat</h4>
          <p>Higher Secondary Certificate | June 2015 - May 2017</p>
          <p>67.38%</p>
          
          <h3>P R O J E C T S</h3>
          <h4>AI Based Game Development (Group of 3 Members)</h4>
          <h5>BE Major project</h5>
          <ul>
            <li>Built a RPG game with a main player character, pickup coins and 3 different potions and weapons.</li>
            <li>Further added 6 distinct AI powered guards and 5 diverse boss enemies. Additionally, stretched out game to make it more playable and intriguing.</li>
            <li>Tools –  C++, VSCode and Unreal Engine 4</li>
          </ul>
          
          <h4>LinkedIn Clone</h4>
          <h5>https://linkedin-clone-88a3a.web.app/</h5>
          <ul>
            <li>Created a clone of a social networking site Linkedin in ReactJS.</li>
            <li>Added the features like sign-in, sign-up and submit a post similar to the original site</li>
            <li>Tools –  HTML, CSS, JavaScript, ReactJS, and Firebase for Authentication and database.</li>
          </ul>

          <h4>Hulu Clone</h4>
          <h5> </h5>
          <ul>
            <li>Created a clone of an online video streaming platform using NextJS tailwind css.</li>
            <li>Added different genres using RestAPI</li>
            <li>Tools –  HTML, CSS, JavaScript, NextJS, tailwind CSS and RestAPI.</li>
          </ul>
          
          <h4>Portfolio Website</h4>
          <h5>https://siddharth-kothari.netlify.app/</h5>
          <ul>
            <li>Working on a personal website featuring skills, interests, projects, and other details.</li>
            <li>Tools –  HTML, CSS, JavaScript, and ReactJS</li>
          </ul>

          <h3>E x t r a - C u r r i c u l a r A c t i v i t i e s</h3>
          <ul>
            <li>Bagged 1st position in the project competition organized by the IT Department of our college in January 2019.</li>
            <li>Participated in the 7th International Conference on Computing, Engineering and design as authors.</li>
            <li>Co-authored “Game Development using Behaviour Tree in Unreal Engine.” published in IJIRSET 2021.</li>
          </ul>
        </div>
      </div>
      <button className="resume__btn" onClick={downloadResume} >Download CV</button>
      <Footer />
     
    </div>
  )
}

export default Resume