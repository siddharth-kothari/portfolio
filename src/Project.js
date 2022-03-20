import React from 'react'
import './Project.css'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from './Carousel'
import CarousalItem from './CarousalItem';




function Project() {
  return (<>
    <div id='projects'></div>
    <div className='project' >
      <div className='project__title'>
        <h1>My Projects</h1>
      </div>
      <div className="project__carousel">
        <Carousel size={3}>
          <CarousalItem
            img='https://cdn.discordapp.com/attachments/492977404491464705/945696089191899136/Screenshot_2022-02-22_at_20.28.15.png'
            alt='polaris project'
            title='Polaris Store'
            desc='Created a digital game distribution site as an academic project.'
            gitlink='https://github.com/siddharth-kothari/polaris-store'
            livelink='http://polaris-store.epizy.com/'
          />

          <CarousalItem
            img='https://cdn.discordapp.com/attachments/492977404491464705/945305334849867847/Screenshot_2022-02-21_at_18.35.31.png'
            alt='personal site'
            title='Personal Website'
            desc='Created a personal website in ReactJs, showcasing about my skills and projects.'
            gitlink='https://github.com/siddharth-kothari/portfolio/tree/react'
            livelink='https://siddharth-kothari.netlify.app/'
          />

          <CarousalItem
            img='https://cdn.discordapp.com/attachments/492977404491464705/945304727237824522/Screenshot_2022-02-16_at_12.30.10.png'
            alt='linkedin clone'
            title='Linkedin Clone'
            desc='Created a LinkedIn Clone using ReactJs and Firebase.'
            gitlink='https://github.com/siddharth-kothari/linkedin-clone/tree/build'
            livelink='https://linkedin-clone-88a3a.web.app/'
          />
          
          <CarousalItem
            img='https://cdn.discordapp.com/attachments/492977404491464705/946427771310207006/Screenshot_2022-02-24_at_20.54.58.png'
            alt='Hulu clone'
            title='Hulu Clone'
            desc='Created a Clone of online video streaming platform Hulu using NextJs and tailwind CSS.'
            gitlink='https://github.com/siddharth-kothari/hulu-clone/tree/main'
            livelink=''
          />

<CarousalItem
            img='https://cdn.discordapp.com/attachments/702877439264686150/951156501752447006/Screenshot_2022-03-09_at_22.04.53.png'
            alt='airbnb clone'
            title='Airbnb Clone'
            desc='Created a Clone of Airbnb using NextJs tailwind CSS, Mapbox.'
            gitlink='https://github.com/siddharth-kothari/airbnb-clone'
            livelink='https://airbnb-site-clone.netlify.app/'
          />
        </Carousel>
      </div>

      
    </div>
    <div className="project__footer">
      <p>Curious about the  process?</p>
      <a href='https://github.com/siddharth-kothari'>
        <p>Visit My Github</p>
      </a>
    </div>

  </>
  )
}

export default Project