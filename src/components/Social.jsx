import React from 'react';
import '../assets/css/social.css'

export default function Social() {
  return (
    <div className='social'>
      <img src="scribble-3.svg" alt="scribble3" className='img-left' />
      <img src="scribble-2.svg" alt="scribble2" className='img-right' />
      <h1>Social Q&A for any website</h1>
      <h3>No-code widget, to get visitors talking</h3>
      <button>Try for free</button>
      <p>14 day trial. No credit card needed.</p>
      <div className='hero'>
        <img src="hero-img-1.svg" alt="hero1" />
        <img src="hero-img-2.svg" alt="hero2" />
        <img src="hero-img-3.svg" alt="hero3" />
      </div>
    </div>
  )
}
