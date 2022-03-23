import React from 'react'
import './about.css'
import me from './../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src = {me} alt = "about Image" />
          </div>  
        </div>
        <div className=' about__content'>
          <div className="about__cards">
            
            <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>3+ years of experience</small>
            </article>
            
            <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>20+ Clients</small>
            </article>

            <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>20+ Projects Completed</small>
            </article>
          </div>

          <p><h1>Hi, I am Ali.<br /></h1>I am a computer programmer and developer with over 3 years of experience. In past projects I have built differnt apps and developed various websites using differnt platforms and frameworks.  <br /></p>
          <a href="#contact" className='btn btn-primary'>Let's Chat</a>
        </div>
      </div>
    </section>
  )
}

export default About