import React from 'react'
import Header from './Header';
import Footer from './Footer';
import './Contact.css';
import { Card } from 'react-bootstrap';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';

function Contact() {
  document.title = 'Siddharth Kothari | Contact Me'
  return (
    <div className='contact'>
      <Header />
      <div className="contact__body">
        <Card className="contact__card">
          <Card.Img variant="top" src="/icon-1.png" className='contact__img' />
          <Card.Body>
            <Card.Title className='contact__mail'>
              <a href="mailto:sidkothari005@gmail.com">sidkothari005@gmail.com</a>
            </Card.Title>
            <Card.Text>

              <a href="https://github.com/siddharth-kothari" className='contact__icon'><GitHubIcon /></a>
              <a href="https://www.linkedin.com/in/siddharthkothari01" className='contact__icon'><LinkedInIcon /></a>
              <a href="tel:+918208562642" className='contact__icon'><CallIcon /></a>

            </Card.Text>
          </Card.Body>
        </Card>

      </div>
      <Footer />
    </div>
  )
}

export default Contact