import React from 'react'
import '../assets/css/about.css'
import FigureList from './FigureList'

export default function About() {
  return (
    <div className='about'>
        <img src='scribble-6.svg' alt="scribble6" className='img-left' />
        <img src='scribble-7.svg' alt="scribble7" className='img-right' />
        <h2>What they are saying about hagrid...</h2> 
        <h3>People <img src="heart.svg" alt="heart" /> us</h3> 
        <div className='people'>
            <FigureList/>
            <FigureList/>
            <FigureList/>
        </div>
    </div>
  )
}
