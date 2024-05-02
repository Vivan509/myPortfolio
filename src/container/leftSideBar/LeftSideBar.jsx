import React from 'react'
import './leftsidebar.css'
import { IoMdDownload } from "react-icons/io";
import { FaFacebook,  FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import myPhoto from '../../assets/myimage.jpg'
import Contact from '../../components/Contact/Contact';

const LeftSideBar = () => {

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/Gulshan_Resume.pdf'
    link.download = 'Gulshan_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className='portfolio__leftsidebar'>``
        <div className='portfolio__leftsidebar-container'>
          <div className='portfolio__leftsidebar-container_img'>
            <img src={myPhoto} alt="my-picture" />
          </div>
          <div className='portfolio__leftsidebar-container_content'>
              <h1 className='p__cormorant'>Gulshan Kumar</h1>
              <div className='portfolio__leftsidebar-container_content-tag'>
                <p className='p__opensans'>Web Developer</p>
              </div>
              <div className='portfolio__leftsidebar-container_icons'>
                  <a href="https://www.facebook.com/vivan.raj.509/" target='blank'><FaFacebook className='icons'/> </a>
                  <a href=""><FaInstagram className='icons'/></a>
                  <a href=""><FaWhatsapp className='icons'/></a>
                  <a href=""><FaGithub className='icons'/></a>
              </div>
              <Contact />
            </div>
          <button type='button' className='custom__button' onClick={handleDownload}>
            <IoMdDownload />
            <span>Download CV</span>
          </button>
        </div>
    </div>
  )
}

export default LeftSideBar