import React from 'react'
import '../assets/css/tech.css'
import TechButton from './TechButton'

export default function Tech() {
  return (
    <div className='tech'>
        <div className='tech-title'>
            <img src="wavy-line.svg" alt="wavy-line" className='wavy-left'/>
            <span>On your website in less than 10 minutes</span>
            <img src="wavy-line.svg" alt="wavy-line" className='wavy-right'/>
        </div>
        <div className='tech-list'>
            <TechButton/>
            <TechButton/>
            <TechButton/>
            <TechButton/>
            <TechButton/>
            <TechButton/>
            <TechButton/>
        </div>
    </div>
  )
}
