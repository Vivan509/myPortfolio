import React, { useState } from 'react'
import { FaLaptopCode, FaAddressBook  } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiAccountBoxFill, RiCloseLine } from "react-icons/ri"
import { IoMdDocument } from "react-icons/io";
import './header.css'


const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='portfolio__header '>
        <div className='portfolio__header-img'>
            <a href="#about">
                <FaLaptopCode />
                <span>Gulshan.</span>
             </a>
        </div>

        <div className='portfolio__header-links'>
            <div className='portfolio__header-links-darkmode'>
                <CiLight />
            </div>
            <div className='portfolio__header-links-options'>
             {toggleMenu
               ? <RiCloseLine onClick={() => {setToggleMenu(false)}}/>
               : <GiHamburgerMenu onClick={() => {setToggleMenu(true)}}/>
               
             }
             {toggleMenu && (
                <div className='myportfolio__header-navbar scale-up-center'>
                    <div className='myportfolio__header_navbar-links'>
                      <li className='active'><a href="#about">
                      <RiAccountBoxFill />
                        About
                        </a></li>
                      <li><a href="#resume">
                        <IoMdDocument />
                        Resume
                        </a></li>
                      <li><a href="#project">
                        <FaLaptopCode />
                        Project
                        </a></li>
                      <li><a href="#contact">
                        <FaAddressBook />
                        Contact
                        </a></li>
                    </div>
                </div>
             )}
            </div>
        </div>
    </div>
  )
}

export default Header