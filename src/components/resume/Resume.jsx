import React from 'react'
import './resume.css'
import SubHeading from '../../components/subHeading/SubHeading'
import { FaSchool } from "react-icons/fa6";
import { PiSuitcaseSimpleFill } from "react-icons/pi";


const Resume = () => {
  return (
    <>
        
        <div className='myportfolio__resume' id='resume'>
            
            <div className='myportfolio__resume_heading'>
              <SubHeading title="Resume"/>
            </div>

            <div className='myportfolio__resume-content'>
                <div className='myportfolio__resume-content-education'>
                    <div className='myportfolio__resume-content_title'>
                        <h2 className='p__cormorant'><FaSchool/><span>Education</span></h2>
                    </div> 

                    <div className='myportfolio__resume-content_card-container'>
                        <div className='myportfolio__resume-content_card'>
                            <div className='myportfolio__resume-content_card-subtitle'>
                                <p>2016-2020</p>
                            </div>

                             <div className='myportfolio__resume-content_card-title'>
                                <h6>Schooling <span>- RPVV</span> </h6>
                             </div>
                             <div className='myportfolio__resume-content_card-desc'
                             >
                                <p>Lajpat Nagar, New Delhi - 110024</p>
                             </div>
                        </div>
                    </div>

                    <div className='myportfolio__resume-content_card-container '>
                        <div className='myportfolio__resume-content_card college-container'>
                            <div className='myportfolio__resume-content_card-subtitle'>
                                <p>2020-2023</p>
                            </div>

                             <div className='myportfolio__resume-content_card-title'>
                                <h6>SBSC Morning <span>- Delhi University</span> </h6>
                             </div>
                             <div className='myportfolio__resume-content_card-desc'
                             >
                                <p>Sheikh Sarai, New Delhi - 110017</p>
                             </div>
                        </div>
                    </div>
                </div>

                <div className='myportfolio__resume-content-experience'>
                     <div className='myportfolio__resume-content_title'>
                         <h2 className='p__cormorant'><PiSuitcaseSimpleFill/><span>Experience</span></h2>
                    </div> 

                    <div className='myportfolio__resume-content_card-container'>
                    <div className='myportfolio__resume-content_card'>
                            <div className='myportfolio__resume-content_card-subtitle'>
                                <p>2023-2024</p>
                            </div>

                             <div className='myportfolio__resume-content_card-title'>
                                <h6>Youtube Project<span>- Learning</span> </h6>
                             </div>
                             <div className='myportfolio__resume-content_card-desc'
                             >
                                <p>and Practicing Online Through Websites and YT.</p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className='myportfolio__resume-content working-container'>
                <div className='myportfolio__resume-content-skill'>
                    <div className='myportfolio__resume-content_title'>
                        <h2  className='p__cormorant'>Working Skills</h2>
                    </div>
                    
                    <div className='myportfolio__resume-content_skill-component'>

                        <div className='myportfolio__resume-content_skill-component-cont'>
                            <div className='myportfolio__resume-content_skill-component-cont-subtitle'>
                                 <p className='p__opensans'>Web Design</p>
                            </div>
                            <div className='myportfolio__resume-content_skill-component-cont-number'>
                                <p className='p__opensans'>90%</p>
                            </div>
                        </div>
                        <div className='myportfolio__resume-content_skill-component-cont-bar'>
                            <div className='myportfolio__resume-content_skill-component-cont-bar_progess'></div>
                         </div>
                        
                    </div>

                    <div className='myportfolio__resume-content_skill-component'>

                        <div className='myportfolio__resume-content_skill-component-cont'>
                            <div className='myportfolio__resume-content_skill-component-cont-subtitle'>
                                 <p className='p__opensans'>HTML</p>
                            </div>
                            <div className='myportfolio__resume-content_skill-component-cont-number'>
                                <p className='p__opensans'>95%</p>
                            </div>
                        </div>
                        <div className='myportfolio__resume-content_skill-component-cont-bar'>
                            <div className='myportfolio__resume-content_skill-component-cont-bar_progess two-progessbar'></div>
                         </div>
                        
                    </div>
                    <div className='myportfolio__resume-content_skill-component'>

                        <div className='myportfolio__resume-content_skill-component-cont'>
                            <div className='myportfolio__resume-content_skill-component-cont-subtitle'>
                                 <p className='p__opensans'>CSS</p>
                            </div>
                            <div className='myportfolio__resume-content_skill-component-cont-number'>
                                <p className='p__opensans'>90%</p>
                            </div>
                        </div>
                        <div className='myportfolio__resume-content_skill-component-cont-bar'>
                            <div className='myportfolio__resume-content_skill-component-cont-bar_progess three-progessbar'></div>
                         </div>
                        
                    </div>
                    <div className='myportfolio__resume-content_skill-component'>

                        <div className='myportfolio__resume-content_skill-component-cont'>
                            <div className='myportfolio__resume-content_skill-component-cont-subtitle'>
                                 <p className='p__opensans'>Javascript</p>
                            </div>
                            <div className='myportfolio__resume-content_skill-component-cont-number'>
                                <p className='p__opensans'>85%</p>
                            </div>
                        </div>
                        <div className='myportfolio__resume-content_skill-component-cont-bar'>
                            <div className='myportfolio__resume-content_skill-component-cont-bar_progess fourth-progessbar'></div>
                         </div>
                        
                    </div>
                    <div className='myportfolio__resume-content_skill-component'>

                        <div className='myportfolio__resume-content_skill-component-cont'>
                            <div className='myportfolio__resume-content_skill-component-cont-subtitle'>
                                 <p className='p__opensans'>React JS</p>
                            </div>
                            <div className='myportfolio__resume-content_skill-component-cont-number'>
                                <p className='p__opensans'>80%</p>
                            </div>
                        </div>
                        <div className='myportfolio__resume-content_skill-component-cont-bar'>
                            <div className='myportfolio__resume-content_skill-component-cont-bar_progess fifth-progessbar'></div>
                         </div>
                        
                    </div>

                </div>

                <div className='myportfolio__resume-content-knowledge'>
                    <div className='myportfolio__resume-content_title'>
                        <h2  className='p__cormorant'>Knowledges</h2>
                    </div>
                    
                    <div className='myportfolio__resume-content_knowledge-component'>
                        <div className='myportfolio__resume-content_knowledge-component_tags'>
                            <p className='p__opensans'>Comunication</p>
                            <p className='p__opensans'>Time Management</p>
                            <p className='p__opensans'>English Speaking</p>
                            <p className='p__opensans'>Client Dealing</p>
                            <p className='p__opensans'>Flexibility</p>
                        </div>
                        
                    </div>
                </div>
            </div> 
        </div>
  </>   
  )
}

export default Resume