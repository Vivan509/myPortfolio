import React from 'react'
import './rightSideBar.css'
import Navbar from '../../components/navbar/Navbar'
import SubHeading from '../../components/subHeading/SubHeading'
import Card from '../../components/card/Card'
import Resume from '../../components/resume/Resume'
import ContactPage from '../../components/contactPage/ContactPage'


const RightSideBar = () => {
    
  return (
    <div className='myportfolio__rightsidebar'>

      <div className='myportfolio__rightsidebar_navbar'>
            <Navbar />
      </div>
       
      <div className='myportfolio__rightsidebar-content'>
        <div className='myportfolio__rightsidebar-content_heading'>
            <SubHeading title="About"/>
        </div>

          <div>
              <p className='p__opensans'>I'm Creative Developer from Delhi, India wanna start working ASAP. I enjoy turning complex development problems in simple, beautiful and responsive one.</p>
              <p className='p__opensans'>My aim is to be in the 1% of the world coders. And Develop beautiful Websites.</p>
          </div>
          <div className='myportfolio__rightsidebar-content_title'>
                <h2 className='p__cormorant'>What I Do</h2>
          </div> 

          <div className='myportfolio__rightsidebar-content_card'>
                <Card />
          </div>

          <div className='myportfolio__rightsidebar-content_copyright'>

          </div>
      </div>

     <Resume />
     <ContactPage />
          
    </div>
  )
}

export default RightSideBar