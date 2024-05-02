import React from 'react'
import './card.css'
import { FaSwatchbook, FaCode, FaLaptopCode  } from "react-icons/fa";
import { HiTrendingUp } from "react-icons/hi";




const Card = () => {
  return (
    <div className='myportfolio__card'>
        <div className='myportfolio__card-container'>
            <div className='myportfolio__card-icon'>
                <FaSwatchbook />
            </div>
            <div    className='myportfolio__card-content'>
                 <div className='myportfolio__card_content-heading'>
                        <h3>Ui/Ux Design</h3>
                 </div>
                 <div className='myportfolio__card_content-desc'>
                     <p className='p__opensans'>Passionate UI/UX intern skilled in design tools, wireframing, and user research, eager to contribute and learn in fast-paced environments.</p>
                 </div>
            </div>
        </div>
        <div className='myportfolio__card-container'>
            <div className='myportfolio__card-icon'>
            <FaCode color='#269fff'/>
            </div>
            <div    className='myportfolio__card-content'>
                 <div className='myportfolio__card_content-heading'>
                        <h3>Web Development</h3>
                 </div>
                 <div className='myportfolio__card_content-desc'>
                     <p className='p__opensans'>Aspiring web development intern proficient in HTML, CSS, JavaScript, React Js, seeking hands-on experience to enhance technical skills.</p>
                 </div>
            </div>
        </div>

        <div className='myportfolio__card-container'>
            <div className='myportfolio__card-icon'>
            <HiTrendingUp color='#269fff'/>
            </div>
            <div    className='myportfolio__card-content'>
                 <div className='myportfolio__card_content-heading'>
                        <h3>SEO</h3>
                 </div>
                 <div className='myportfolio__card_content-desc'>
                     <p className='p__opensans'>Aspiring web development intern proficient in HTML, CSS, JavaScript, React Js, seeking hands-on experience to enhance technical skills.</p>
                 </div>
            </div>
        </div>

        <div className='myportfolio__card-container'>
            <div className='myportfolio__card-icon'>
            <FaLaptopCode color='#ff6080'/>
            </div>
            <div    className='myportfolio__card-content'>
                 <div className='myportfolio__card_content-heading'>
                        <h3>Resposive Design</h3>
                 </div>
                 <div className='myportfolio__card_content-desc'>
                     <p className='p__opensans'>Aspiring web development intern proficient in HTML, CSS, JavaScript, React Js, seeking hands-on experience to enhance technical skills.</p>
                 </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default Card