import React from 'react'
import './services.css'
import {BsCheck2} from 'react-icons/bs'
const services = () => {
  return (
    <section id='services'>
        <h5>What I Offer </h5>
        <h2>Services </h2>
        <div className="container services__container">
            <article className="service">
                <div className="service__head">
                    <h3>UI/UX design</h3>
                </div>
                <ul className='service__list'>
                    <li>
                      <BsCheck2 className='service__list-icon'/>
                      <p>Designing interactive websites such as this one</p>
                    </li>
                    <li>
                      <BsCheck2 className='service__list-icon'/>
                      <p>Building multiple apps with differnt features and interfaces</p>
                    </li>
                    <li>
                      <BsCheck2 className='service__list-icon'/>
                      <p>Able to work with differnet UX/UI platforms such as Figma and WordPress</p>
                    </li>
                    
                    
                </ul>
            </article>
            <article className="service">
                <div className="service__head">
                    <h3>Web Development</h3>
                </div>
                <ul className='service__list'>
                    <li>
                      <BsCheck2 className='service__list-icon'/>
                      <p>Web developmet using multiple languages,libraries and frameworks</p>
                    </li>
                    <li>
                      <BsCheck2 className='service__list-icon'/>
                      <p>Develop projects on both Backend and FrontEnd.</p>
                    </li>
                    <li>
                      <BsCheck2 className='service__list-icon'/>
                      <p>Authentication</p>
                    </li>
                    
                </ul>
            </article>
            <article className="service">
                <div className="service__head">
                    <h3>Content Creation</h3>
                </div>
                <ul className='service__list'>
                    <li>
                      <BsCheck2 className='service__list-icon'/>
                      <p>Flexible to differnt tools such as WordPress and Figma</p>
                    </li>
                    <li>
                      <BsCheck2 className='service__list-icon'/>
                      <p>Interactive Web and Mobile apps</p>
                    </li>     
                    <li>
                      <BsCheck2 className='service__list-icon'/>
                      <p>Following any requested design or interface</p>
                    </li>                                       
                </ul>
            </article>
        </div>
    </section> 
    )
}

export default services