import React from 'react'
import './contactPage.css'
import SubHeading from '../subHeading/SubHeading'

const ContactPage = () => {
  return (
    <div className='myportfolio__contactpage' id='contact'>
        <div className='myportfolio__contactpage-title'>
            <SubHeading title='Contact'/>
        </div>
        <form>
            <div className='myportfolio__contactpage-form_subtitle'>
                <p className='p__opensans'>I'm Always Open To Discuse about</p>
                <p className='p__opensans'>design work or jobs.</p>
            </div>

            <div className='myportfolio__contactpage-form_input-container'>
                <div className='myportfolio__contactpage-form_input-name'>
                     <input type="text" id='name-input' required/>
                     <label htmlFor="name-input">Name*</label>
                     <div className='underline-name'></div>
                </div>
                <div className='myportfolio__contactpage-form_input-email'>
                    <input type="email" required/>
                    <label>Email*</label>
                    <div className='underline-email'></div>
                </div>
                <div className='myportfolio__contactpage-form_input-message'>
                     <textarea cols="110" rows="0"></textarea>
                    <label>Message</label>
                    <div className='underline-message'></div>
                </div> 
                <div className='myportfolio__contactpage-form_input-button'>
                    <button type='submit' value='send'>Submit</button>
                </div>
    
            </div>
        </form>
    </div>
  )
}

export default ContactPage