
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import PreviewIcon from '@mui/icons-material/Preview';

const CarousalItem = ({img, alt, title, desc, gitlink, livelink}) => {
  return (
    <div className='item'>
        <img src={img} alt={alt}/>
        <h5>{title}</h5>
        <p>{desc}</p>
        <div className='project__icon'>
          <a href={gitlink}><GitHubIcon/></a>
          <a href={livelink}><PreviewIcon /></a>
        </div>
        </div>
  )
}

export default CarousalItem