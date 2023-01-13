import React from 'react'
import Card from './Card'
import '../assets/css/result.css'

export default function Result() {
  return (
    <div className='result'>
      <img src='scribble-9.svg' alt='scribble9' className='img-left' />
      <img src='scribble-8.svg' alt='scribble8' className='img-right' />
      <h2>All of the results - none of the work!</h2>
      <h3>In 15 minutes get set for automatic SEO, social proof and meaningful engagement</h3>
      <div className='card-list'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
      </div>
    </div>
  )
}