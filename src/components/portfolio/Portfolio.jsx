import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/lancely.png'
import IMG2 from '../../assets/weather-app.png'
import IMG3 from '../../assets/food-delivery.png'
import IMG4 from '../../assets/food.png'
import IMG5 from '../../assets/map.png'
import projectSummary from '../../assets/finalsummary.pdf'

const portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>PortFolio</h2>
        <div className="container portfolio__container">
          <article className='portfolio__item'>
              <div className='portfolio__item-image'>
                  <img src={IMG1} alt= "Capstone" />
              </div>
              <h3>Lancely Co.</h3>
              <div className="portfolio__item-cta"><a href= {projectSummary} download className='btn'>Download CV</a></div>          
              <div className="portfolio__item-cta"><a href= 'https://drive.google.com/file/d/1f1N7j260_XUOmxb0TJR-5fIiVgvomozc/view?usp=sharing'className='btn'>Download Figma Instance</a></div>          
          </article>
          <article className='portfolio__item'>
              <div className='portfolio__item-image'>
                  <img src={IMG2} alt= "Capstone" />
              </div>
              <h3>Weather App</h3>
              
          </article>
          <article className='portfolio__item'>
              <div className='portfolio__item-image'>
                  <img src={IMG3} alt= "Capstone" />
              </div>
              <h3>Food delivery App</h3>
             
          </article>
          <article className='portfolio__item'>
              <div className='portfolio__item-image'>
                  <img src={IMG4} alt= "Capstone" />
              </div>
              <h3>Diet App</h3>
             
          </article>
          <article className='portfolio__item'>
              <div className='portfolio__item-image'>
                  <img src={IMG5} alt= "Capstone" />
              </div>
              <h3>Map App</h3>
          </article>
         
        </div>



        








    </section>  
    )
}

export default portfolio