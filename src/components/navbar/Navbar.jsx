import React from 'react'
import './navbar.css'
import { RiAccountBoxFill } from "react-icons/ri"
import { IoMdDocument } from "react-icons/io";
import { FaLaptopCode, FaAddressBook  } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className='myportfolio__navbar'>
      <div className='myportfolio__navbar-links'>
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
  )
}

export default Navbar