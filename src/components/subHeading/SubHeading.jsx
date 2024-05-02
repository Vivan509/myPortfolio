import React from 'react'
import './subHeading.css'

const SubHeading = ({title}) => {
  return (
    <div className='myportfolio__subtitle'>
      <h1 className='p__cormorant'>{title}</h1>
    </div>
  )
}

export default SubHeading