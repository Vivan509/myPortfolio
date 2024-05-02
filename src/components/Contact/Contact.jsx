import React from 'react'
import './contact.css'
import { IoCalendarOutline, IoPhonePortraitOutline, IoMail, IoLocationOutline } from "react-icons/io5";



const Contact = () => {
  return (
    <div className='portfolio__contact '>
        <div className='portfolio__contact-row'>
          <div className='portfolio__contact-row_img '>
            <IoPhonePortraitOutline />
          </div>
          <div className='portfolio__contact-row_content'>
            <p>Phone</p>
            <a href="tel:+91-7982212117">+91 79822 12117</a>
          </div>
        </div>

        <div className='portfolio__contact-row'>
          <div className='portfolio__contact-row_img mail-icon'>
            <IoMail />
          </div>
          <div className='portfolio__contact-row_content'>
            <p>Mail</p>
            <a href="mailto:gulshankumar.1565@gmail.com">gulshankumar.1565@gmail.com</a>
          </div>
        </div>
        <div className='portfolio__contact-row'>
          <div className='portfolio__contact-row_img location-icon'>
            <IoLocationOutline />
          </div>
          <div className='portfolio__contact-row_content'>
            <p>Location</p>
            <a href="">House No. 39, Chirag Delhi, New Delhi - 110017</a>
          </div>
        </div>
        <div className='portfolio__contact-row'>
          <div className='portfolio__contact-row_img calender-icon'>
            <IoCalendarOutline />
          </div>
          <div className='portfolio__contact-row_content'>
            <p>Birthday</p>
            <a href="">June 02, 2002</a>
          </div> 
        </div>
    </div>
  )
}

export default Contact