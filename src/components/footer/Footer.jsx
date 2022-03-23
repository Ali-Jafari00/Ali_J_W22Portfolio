import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
const footer = () => {
  return (
    <footer>
       <a href="/#" className='footer__logo'>Ali</a>
       <ul className='parmalinks'>
         <li><a href="/#">Home</a></li>
         <li><a href="#about">About</a></li>
         <li><a href="#experience">Experience</a></li>
         <li><a href="#services">Services</a></li>
         <li><a href="#portfolio">Portfolio</a></li>
         <li><a href="#contact">Contact</a></li>
         
       </ul>

       <div className="footer__socials">
         <a href="http://instagram.com"><FiInstagram/></a>
         <a href="http://github.com"><FaGithub/></a>
         <a href="http://linkedIn.com"><BsLinkedin/></a>
       </div>
       <div className="footer__copyright">
         <small>&copy; Ali Jafari, All rights reserved.</small>
       </div>
    </footer>
  )
}

export default footer