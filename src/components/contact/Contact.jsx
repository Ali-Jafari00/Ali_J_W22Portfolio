import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('Yservice_kkd8kld', 'template_15dc7oa', form.current, 'user-PjX5pLz9d_jYkayta')
    e.target.reset()
  };
  return (
  <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact__container">
          <div className="contact__options">
              <article className="contact__option">
                  <MdOutlineEmail className='contact__option-icon'/>
                  <h4>Email</h4>
                  <h5>Ali.Jafari8040@Gmail.com</h5>
                  <a href="mailto:Ali.Jafari8040@gmail.com" target='_blank' rel="noreferrer">Send an Email</a>
              </article>
              <article className="contact__option">
                  <BsWhatsapp className='contact__option-icon'/>
                  <h4>Text</h4>
                  <h5>+16476078330</h5>
                  <a href="https://web.whatsapp.com/send?phone+16476078330" target='_blank' rel="noreferrer">Send a Message</a>
              </article>
          </div>
          <form ref={form} onSubmit = {sendEmail}>
            <input type="text" placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder= 'Your Email' requierd/>
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send message</button>
          </form>
    </div>
  </section>  
  )
}

export default Contact